const sendMail = require("../../../1-main/1-helpers/sendMail");

const sendInvite = async (req, res) => {
    try{
        const answer = await sendMail();

        res.status(200).json({
            data: answer,
            info: "sent"
        });

    } catch (e){
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(invite).'
        })
    }

}
module.exports = sendInvite
