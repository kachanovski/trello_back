const Team = require('../1-models/Team')
const Member = require('../1-models/Member')

const createTeam = async (req, res) => {

    try {
        const {name, description, user_id} = req.body

        if (!name) {
            return res.status(400).json({
                resultCode: 1,
                message: 'name is required !'
            })
        }

        const team = await Team.create({ name, description})

        const newMember = {
            team_id: team?._id,
            user_id,
            isAdmin: true
        }

        await Member.create(newMember)

        res.status(201).json({
            resultCode: 0,
            message: 'Team created'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = createTeam