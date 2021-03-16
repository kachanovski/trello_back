const Board = require('../1-models/Board')

const deleteBoard = async (req, res) => {
    try {
        const id = req.path.slice(1);

        try {
            await Board.findById(id).exec()
        } catch (e) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found board_id'
            })
        }
        await Board.findByIdAndDelete(id).exec()
        res.status(200).json({
            resultCode: 0,
            message: 'board deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(delete board).'
        })
    }
}

module.exports = deleteBoard