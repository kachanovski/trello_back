const Board = require('../1-models/Board')

const updateBoard = async (req, res) => {
    try {
        const board_id = req.path.slice(1)

        const findCard = await Board.findById(board_id)
        if (!findCard) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found board_id'
            })
        }
        await Board.findByIdAndUpdate(board_id, req.body).exec()
        res.status(200).json({
            resultCode: 0,
            message: 'board updated'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(update board).'
        })
    }
}

module.exports = updateBoard