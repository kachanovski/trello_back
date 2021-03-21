const jwt = require("jsonwebtoken");
const {config} = require("../config");

const generateToken = (user, rememberMe = false) => {

    const token = jwt.sign(
        {
            _id: user._id,
            email: user?.email
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