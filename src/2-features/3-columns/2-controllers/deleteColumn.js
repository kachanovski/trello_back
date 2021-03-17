const Column = require('../1-models/Column')

const deleteColumn = async (req, res) => {
    try {
        const id = req.path.slice(1);

        const column = await Column.findById(id)
        if (!column) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found column'
            })
        }

        await Column.findByIdAndDelete(id)
        res.status(200).json({
            resultCode: 0,
            message: 'column deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(delete column).'
        })
    }
}

module.exports = deleteColumn