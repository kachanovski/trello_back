const Column = require('../1-models/Column')

const updateColumn = async (req, res) => {
    try {
        const {title} = req.body
        const board_id = req.path.slice(1)

        if (!title) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Title is requared'
            })
        }

        const column = await Column.findById(board_id)
        if (!column) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found column_id'
            })
        }
        await Column.findByIdAndUpdate(board_id, req.body)
        res.status(200).json({
            resultCode: 0,
            message: 'column updated'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(update column).'
        })
    }
}

module.exports = updateColumn