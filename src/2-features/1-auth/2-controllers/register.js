const bCrypt = require("bcrypt")
const User = require('../1-models/User')
const validateAuth = require("../../../1-main/1-helpers/validators")

const register = async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body

    if (validateAuth(req, res)) {
        try {
            const oldUser = await User.findOne({email}).exec()
            if (oldUser) {
                res.status(400).json({
                    resultCode: 1,
                    message: 'email exists'
                })
            } else {
                const user = await User.create(
                    {
                        email,
                        password: await bCrypt.hash(password, 8),
                        rememberMe: false,

                        userName: email,
                        verified: false,

                        teams: [],
                        boards: []
                    }
                )

                const addedUser = {...user._doc};

                delete addedUser.password; // ne visilai parol` na front!!!!!

                res.status(201).json({
                    resultCode: 0,
                    message: 'User created'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({
                resultCode: 1,
                message: 'Yoops, something went wrong.'
            })
        }
    }

}

module.exports = register
