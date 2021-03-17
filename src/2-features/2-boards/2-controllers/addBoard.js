const Board = require('../1-models/Board')

const addBoard = async (req, res) => {

    try {
        const board = req.body;
        await Board.create(board)

        res.status(201).json({
            resultCode: 0,
            message: 'Board added'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = addBoard