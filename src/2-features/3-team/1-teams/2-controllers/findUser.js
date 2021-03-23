const User = require('../../../1-auth/1-models/User')

const findUser = async (req, res) => {

    const {email} = req.query

    try {
        if (email.length < 2) {
            return res.status(400).send({
                resultCode: 1,
                message: "email length must be more 2 symbols"
            })
        } else {
            const users = await User.find()
            const mathResult = users?.filter(i => i.email.includes(email)).map(e => e.email)

            return res.status(201)
                .json({
                    data: mathResult,
                    resultCode: 0
                });
        }
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong.'
        })
    }

}

module.exports = findUser