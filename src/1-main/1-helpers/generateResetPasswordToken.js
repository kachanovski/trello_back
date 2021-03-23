const jwt = require("jsonwebtoken");
const {config} = require("../config");

const generateResetPasswordToken = (email) => {

    const resetPasswordToken = jwt.sign(
        {
            email
        },
        config.jwtSecretResetPassword,
        {
            expiresIn: 60 * 60 }
    )
    return resetPasswordToken

};

module.exports = generateResetPasswordToken