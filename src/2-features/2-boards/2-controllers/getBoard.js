const Board = require('../1-models/Board')

const getBoard = async (req, res) => {
    const id = req.path.slice(1)
    try {
        const board = await Board.findById(id)
        res.json({
            resultCode: 0,
            data: {
                board
            }
        })
    } catch
        (e) {
        res.json({
            resultCode: 1,
            message: 'Yoops, something went wrong(getBoard)'
        })
    }
}

module.exports = getBoard