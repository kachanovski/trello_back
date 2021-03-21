const Board = require('../1-models/Board')

const addBoard = async (req, res) => {

    try {
        const {title, team_id} = req.body;

        if(!title){
            return res.status(500).json({
                resultCode: 1,
                message: 'Title is required'
            })
        }

        await Board.create({team_id, title})

        res.status(201).json({
            data: {
                title, team_id
            },
            resultCode: 0,
            message: 'Board added'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = addBoard