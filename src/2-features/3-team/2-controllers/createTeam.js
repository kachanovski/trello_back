const Team = require('../1-models/Team')

const createTeam = async (req, res) => {

    try {
        const {name, description} = req.body

        if (!name) {
            return res.status(400).json({
                resultCode: "6050c4b0665e18194c7709b1",
                message: 'name is required !'
            })
        }

        const creator = {
            id: "6050c4b0665e18194c7709b1",
            name: "Alex"
        }

        const team = {
            name,
            creator_id: creator.id,
            description,
            participants: {
                userId: creator.id,
                userName: creator.name
            }
        }

        await Team.create(team)

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