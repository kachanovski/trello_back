const Team = require('../1-models/Team')
const sendMail = require("../../../../1-main/1-helpers/sendMail")
const emailValidator = require("../../../../1-main/1-helpers/validators")
const generateInviteToken = require("../../../../1-main/1-helpers/generateToken");

const sendInvite = async (req, res) => {
    try {
        const {email, team_id} = req.body

        if (!team_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Team id not found.'
            })
        }

        if (!emailValidator(email)) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Email is not valid.'
            })
        }

        const inviteT = await generateInviteToken()

        await sendMail(email, inviteT, team_id)

        const team = await Team.findById(team_id)
        await Team.findByIdAndUpdate(team_id, {inviteTokens: [...team?.inviteTokens, inviteT]})

        res.status(200).json({
            resultCode: 0,
            info: "sent",
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(invite).'
        })
    }
}

module.exports = sendInvite
