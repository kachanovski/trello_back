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
            message: 'logOut success'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong.'
        })
    }

}
module.exports = logOut