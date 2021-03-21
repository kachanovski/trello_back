const Team = require('../1-models/Team')

const acceptInvite = async (req, res) => {
    try {
        const { inviteToken, inviteTokenDeathTime} = req.body

        if(!inviteToken){
            return res.status(400).json({
                resultCode: 1,
                message: 'Token not found.'
            })
        }

        if(inviteTokenDeathTime < Date.now()){
            await Team.findOne({})
            return res.status(400).json({
                resultCode: 1,
                message: 'Token is expired.'
            })
        }
        //proverit kyky


        res.status(200).json({
            resultCode: 0,
            info: "sent"
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(invite).'
        })
    }
}

module.exports = acceptInvite
