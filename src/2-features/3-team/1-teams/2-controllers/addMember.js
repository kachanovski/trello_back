const Team = require('../1-models/Team')
const User = require('../../../1-auth/1-models/User')

const addMember = async (req, res) => {

    const {email, team_id} = req.body

    try {

        const newMember = await User.findOne({email}).exec()
        if (!newMember) {
            return res.status(500).json({
                resultCode: 1,
                message: 'user not found'
            })
        }

        const team = await Team.findById(team_id)
        if (!team) {
            return res.status(500).json({
                resultCode: 1,
                message: 'team not found'
            })
        }
        if(team?.members.find(i => i.userId == newMember._id.toString())) {
            return res.status(500).json({
                resultCode: 1,
                message: 'user include in this group'
            })
        }

        const update = await Team.findByIdAndUpdate(team_id, {
            ...team._doc,
            members: [...team?.members, {userId: newMember._id}]
        }, {new: true})

        res.status(200).json({
            data: update,
            resultCode: 0,
            message: 'team deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(add members).'
        })
    }
}

module.exports = addMember