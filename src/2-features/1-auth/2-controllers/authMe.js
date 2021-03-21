const {config} = require("../../../1-main/config")
const jwt = require('jsonwebtoken')

const authMe = async (req, res,user) => {

    console.log(user)

    const {token} = req.cookies
    try {
        const decoded = jwt.verify(token, config.jwtSecret)

        return res.status(200).json({
                resultCode: 0,
                data: {
                    _id: decoded._id,
                    email: decoded.email,
                    userName: decoded.userName
                }
            })
    } catch (er) {
        res.clearCookie("token");
        return res.status(400).send({
            resultCode: 1,
            message: er.message
        })
    }
}

module.exports = authMe
