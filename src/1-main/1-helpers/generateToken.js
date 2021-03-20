const jwt = require("jsonwebtoken");
const {config} = require("../config");

const generateToken = (user, rememberMe = false) => {

    // const token = uuid.v1();
    // const tokenDeathTime = Date.now() + (1000 * 60 * 60 * days) // 1 days
    // const inviteT = {
    //     token, tokenDeathTime
    // }
    // return inviteT;

    const token = jwt.sign(
        {
            _id: user._id,
            email: user?.email,
            userName: user?.userName
        },
        config.jwtSecret,
        {
            expiresIn: rememberMe
                ? 60 * 60 * 24 * 7
                : 60 * 60 * 24 * 3
        }
    )
    return token

};

module.exports = generateToken