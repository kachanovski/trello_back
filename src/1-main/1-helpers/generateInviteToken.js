const jwt = require("jsonwebtoken");
const {config} = require("../config");

const generateInviteToken = (email, team_id) => {

    const inviteToken = jwt.sign(
        {
            email,
            team_id
        },
        config.jwtSecretTeam,
        {
            expiresIn: 60 * 60 * 24 * 3}
    )
    return inviteToken

};

module.exports = generateInviteToken