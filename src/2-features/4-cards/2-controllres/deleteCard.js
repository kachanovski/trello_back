const Card = require('../1-models/Card')

const deleteCard = async (req, res) => {
    try {
        const id = req.path.slice(1);

        const card = await Card.findById(id)
        if (!card) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found card'
            })
        }

        await Card.findByIdAndDelete(id)
        res.status(200).json({
            resultCode: 0,
            message: 'card deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(delete card).'
        })
    }
}

module.exports = deleteCard