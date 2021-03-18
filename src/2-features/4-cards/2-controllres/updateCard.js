const Card = require('../1-models/Card')

const updateCard = async (req, res) => {
    try {
        const {title} = req.body
        const card_id = req.path.slice(1)

        if (!title) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Title is requared'
            })
        }

        const card = await Card.findById(card_id)
        if (!card) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found card_id'
            })
        }
        await Card.findByIdAndUpdate(card_id, req.body)
        res.status(200).json({
            resultCode: 0,
            message: 'card updated'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(update card).'
        })
    }
}

module.exports = updateCard