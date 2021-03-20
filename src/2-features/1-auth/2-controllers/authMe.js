const {config} = require ("../../../1-main/config")
const jwt = require('jsonwebtoken')

const authMe = async (req, res) => {

    const token = req.cookies.token
    const token1 = req.headers.cookie?.substring(6)
    console.log(token1)
    console.log(token)
    if (!token)
        return res.status(401).send({
            resultCode: 1,
            message: "Access denied...No token provided..."
        })
    try {
        const decoded = jwt.verify(token, config.jwtSecret)
        req.body = decoded;
        console.log(decoded)
        return res.status(200).json({
            resultCode: 0,
            data: {
                test: '123',
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
