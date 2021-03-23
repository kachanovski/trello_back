const User = require("../1-models/User")
const sendMail = require("../../../../1-main/1-helpers/sendMail")
const generateResetPasswordToken = require("../../../1-main/1-helpers/generateResetPasswordToken");


const sendMailSetNewPassword = async (req, res) => {
    try {
        const {email} = req.body

        if (!email) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Поле email является обязательным.'
            })
        }
        const user = await User.findOne({email})


        if (!user) {
            return res.status(400).json({
                resultCode: 1,
                message: 'Пользователь не найден.Проверьте email!'
            })
        }

        const resetPasswordToken = await generateResetPasswordToken(email)

        await sendMail(email, resetPasswordToken)

        res.status(200).json({
            resultCode: 0,
            message: "Письмо отправлено на указанный email",
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что-то пошло не так. Сервер не значет что это за ошибка.'
        })
    }
}

module.exports = sendMailSetNewPassword
