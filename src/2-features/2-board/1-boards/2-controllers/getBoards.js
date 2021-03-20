const Board = require('../1-models/Board')

const getBoards = async (req, res) => {
    try {
        const boards = await Board.find().exec()
        res.json({
            resultCode: 0,
            data: {
                boards: boards,
                count: boards.length
            }
        })
    } catch
        (e) {
        res.json({
            resultCode: 1,
            message: 'Yoops, something went wrong(getBoards)'
        })
    }
}

module.exports = getBoards