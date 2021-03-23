const Team = require('../1-models/Team')
const jwt = require("jsonwebtoken");
const {config} = require("../../../../1-main/config");
const User = require('../../../1-auth/1-models/User')
const Member = require('../1-models/Member')

const acceptInviteToTeam = async (req, res) => {
    try {
        const {inviteToken} = req.body

        const decodeInviteToken = jwt.verify(inviteToken, config.jwtSecretTeam)

        if (!decodeInviteToken) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Время действия приглашения истекло.'
            })
        }

        if (!inviteToken) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Токен не найден.'
            })
        }

        console.log(decodeInviteToken)

        const team = await Team.findById({_id:decodeInviteToken.team_id})

        if (!team) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Команда не найдена.'
            })
        }

        const user = await User.findOne({email: decodeInviteToken?.email})

        if (!user) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Пользователь не зарегестрирован.'
            })
        }

        if (user?.email !== decodeInviteToken?.email) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Email пользователя не совпадает с email, на которое было выслано приглашение.'
            })
        }
        const member = await Member.findOne({team_id: decodeInviteToken.team_id, user_id: user?._id})

        if (member) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Пользователь уже состоит в данной команде'
            })
        }

        await Member.create({team_id: decodeInviteToken.team_id, user_id: user?._id})

        res.status(200).json({
            resultCode: 0,
            message: 'Пользователь добавлен в команду'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(invite).'
        })
    }
}

module.exports = acceptInviteToTeam
