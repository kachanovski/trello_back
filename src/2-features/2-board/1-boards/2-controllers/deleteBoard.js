const Board = require('../1-models/Board')
const Column = require('../../2-columns/')

const deleteBoard = async (req, res) => {
    try {
        const id = req.path.slice(1);
        try {
            await Board.findById(id)
        } catch (e) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found board id'
            })
        }
        await Board.findByIdAndDelete(id)
        await Column.find({board_id: id}).remove()
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