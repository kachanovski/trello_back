const Card = require('../1-models/Card')

const getCards = async (req, res) => {
    try {
        const {column_id} = req.query
        if (!column_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'column Id not found.'
            })
        }
        const cards = await Card.find()
        const columnCards = cards?.filter(i => i.column_id === column_id)
        res.json({
            resultCode: 0,
            data: {
                cards: columnCards,
                count: columnCards.length
            }
        })
    } catch
        (e) {
        res.json({
            resultCode: 1,
            message: 'Yoops, something went wrong(getCards)'
        })
    }
}

module.exports = getCards