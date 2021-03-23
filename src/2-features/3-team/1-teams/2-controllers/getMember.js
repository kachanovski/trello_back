const Member = require('../1-models/Member')

const getMembers = async (req, res) => {

    const {team_id, user_id} = req.query

    try {
        if (!team_id) {
            return res.status(400).send({
                resultCode: 1,
                message: "Команда не найдена"
            })
        }

        const members = await Member.find({team_id})

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong.'
        })
    }

}

module.exports = getMembers