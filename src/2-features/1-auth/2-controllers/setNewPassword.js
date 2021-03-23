const jwt = require("jsonwebtoken");
const {config} = require("../../../1-main/config");
const User = require('../1-models/User')
const bCrypt = require("bcrypt");

const setNewPassword = async (req,res) => {

    const {token, password} = req.body

    try {
        if(!token) {
            res.status(400).json({
                resultCode: 1,
                message: 'Токен для изменения не найден.'
            })
        }
        if(!password) {
            res.status(400).json({
                resultCode: 1,
                message: 'Некорректный пароль.'
            })
        }

        res.status(200).send()

        const decodeResetPasswordToken = jwt.verify(token, config.jwtSecretResetPassword)

        await User.findOneAndUpdate({email:decodeResetPasswordToken?.email}, {password: await bCrypt.hash(password, 8)})

        res.status(201).json({
            resultCode: 0,
            message: 'Пароль успешно изменен'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что то пошло не так.Сервер не значет в чем проблема.'
        })
    }

}

module.exports = setNewPassword