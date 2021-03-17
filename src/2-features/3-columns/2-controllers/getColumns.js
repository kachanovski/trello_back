const Column = require('../1-models/Column')

const getColumns = async (req, res) => {
    try {
        const {board_id} = req.query
        if (!board_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'board Id not found.'
            })
        }
        const columns = await Column.find()
        const boardColumns = columns?.filter(i=> i.board_id === board_id)
        res.json({
            resultCode: 0,
            data: {
                columns: boardColumns,
                count: boardColumns.length
            }
        })
    } catch
        (e) {
        res.json({
            resultCode: 1,
            message: 'Yoops, something went wrong(getColumns)'
        })
    }
}

module.exports = getColumns