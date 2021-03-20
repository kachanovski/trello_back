const {config} = require("../config")
const jwt = require('jsonwebtoken')
const generateToken = require("./generateToken");

const isAuth = (f) => async (req, res) => {

    const {token} = req.cookies

    if (!token)
        return res.status(401).send({
            resultCode: 1,
            message: "Access denied...No token provided..."
        })
    try {
        const decoded = jwt.verify(token, config.jwtSecret)
        const updateToken = await generateToken(decoded)
        res.cookie('token', updateToken, {
                sameSite: "none",
                secure: true
            })
        f(req,res)
    } catch (er) {
        res.clearCookie("token");
        return res.status(400).send({
            resultCode: 1,
            message: "token is ended"
        })
    }
}

module.exports = isAuth
