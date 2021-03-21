const Team = require('../1-models/Team')

const checkInvite = async (req, res) => {
    try {
        const {inviteToken, inviteTokenDeathTime, team_id, userId, userName} = req.body

        if (!inviteToken) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Token not found.'
            })
        }
        if (!inviteTokenDeathTime) {
            await Team.findOne({})
            return res.status(400).json({
                resultCode: 1,
                message: 'TokenDeathTime is not found.'
            })
        }

        const team = await Team.findById(team_id)

        if (!team) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Team notFound.'
            })
        }

        if (inviteTokenDeathTime < Date.now()) {
            const filteredTokens = team?.inviteTokens.filter(s => s.inviteToken !== inviteToken)
            await Team.findByIdAndUpdate(team_id, {
                inviteTokens: filteredTokens,
                participants: [...team?.participants, {userId, userName}]
            })

            return res.status(400).json({
                resultCode: 1,
                message: 'Token is expired.'
            })
        }
        //proverit kyky


        const findToken = team?.inviteTokens.find(s => s.inviteToken === inviteToken)

        if (!findToken) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Inncorrect token.'
            })
        } else {
            const filteredTokens = team?.inviteTokens.filter(s => s.inviteToken !== inviteToken)
            await Team.findByIdAndUpdate(team_id, {
                inviteTokens: filteredTokens,
                participants: [...team?.participants, {userId: '123', userName: 'Den'}]
            })
        }

        res.status(200).json({
            resultCode: 0,
            data: {
                name: team?.name,
                _id: team?._id,
                participants: team?.participants.length
            }
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(invite).'
        })
    }
}

module.exports = checkInvite
