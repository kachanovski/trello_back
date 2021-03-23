const jwt = require('jsonwebtoken')
const {config} = require("../../../1-main/config");

const logOut = async (req, res) => {
    try {

        const logOutToken = jwt.sign(
            {},
            config.jwtSecret,
            {
                expiresIn: 0
            }
        )

        res.cookie("token", logOutToken, {
            sameSite: "none",
            secure: true
        })
            .status(201).json({
            resultCode: 0,
            message: 'Выход из аккаунта прошел успешно'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что то пошло не так.Сервер не значет в чем проблема.'
        })
    }

}
module.exports = logOut