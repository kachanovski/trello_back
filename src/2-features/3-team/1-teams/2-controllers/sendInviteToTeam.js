const sendMail = require("../../../../1-main/1-helpers/sendMail")
const generateInviteToken = require("../../../../1-main/1-helpers/generateInviteToken");


const sendInviteToTeam = async (req, res) => {
    try {
        const {email, team_id} = req.body

        if (!team_id) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Команда не найдена.'
            })
        }

        if (!email) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Поле email является обязательным.'
            })
        }

        const inviteToken = await generateInviteToken(email, team_id)

        console.log(inviteToken)

        await sendMail(email, inviteToken)

        res.status(200).json({
            resultCode: 0,
            message: "Приглашение отправлено",
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что-то пошло не так. Сервер не значет что это за ошибка.'
        })
    }
}

module.exports = sendInviteToTeam
