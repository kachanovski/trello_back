const Team = require('../1-models/Team')

const getMyTeams = async (req, res) => {

    try {
        const {user_id} = req.query

        if (!user_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'user not found!'
            })
        }

        const teams = await Team.find()
        const myTeams = teams?.filter(i => i.creator_id === user_id)

        res.status(201).json({
            resultCode: 0,
            data: {
                teams: myTeams,
                count: myTeams.length
            }
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = getMyTeams