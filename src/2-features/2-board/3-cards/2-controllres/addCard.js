const Card = require('../1-models/Card')
const Column = require('../../2-columns/1-models/Column')

const addCard = async (req, res) => {
    try {
        const {column_id} = req.query
        const {title} = req.body

        if (!column_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'column Id not found.'
            })
        }

        if (!title) {
            return res.status(400).json({
                resultCode: 1,
                message: 'title is requared .'
            })
        }

        const column = await Column.findById(column_id).exec()

        const card = {
            column_id: column._id,
            title: title
        }

        await Card.create(card)

        res.status(201).json({
            resultCode: 0,
            message: 'card added'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = addCard