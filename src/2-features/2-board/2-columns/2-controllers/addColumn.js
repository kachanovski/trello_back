const Column = require('../1-models/Column')
const Board = require('../../1-boards/1-models/Board')

const addColumn = async (req, res) => {

    try {
        const {board_id} = req.query
        const {title} = req.body

        if (!board_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'board Id not found.'
            })
        }

        if (!title) {
            return res.status(400).json({
                resultCode: 1,
                message: 'title is requared .'
            })
        }

        const board = await Board.findById(board_id)

        const column = {
            board_id: board?._id,
            title: title
        }

        await Column.create(column)

        res.status(201).json({
            resultCode: 0,
            message: 'Column added'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = addColumn