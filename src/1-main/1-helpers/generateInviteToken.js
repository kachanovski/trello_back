const uuid  = require('uuid');

const generateInviteToken = () => {

    const inviteToken = uuid.v1();
    const inviteTokenDeathTime = Date.now() + (1000 * 60 * 60 * 24) // 1 days
    const inviteT = {
        inviteToken, inviteTokenDeathTime
    }
    return inviteT;
};

module.exports = generateInviteToken