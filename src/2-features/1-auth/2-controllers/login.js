const User = require('../1-models/User')
const jwt = require('jsonwebtoken')
const bCrypt = require("bcrypt");
const validateAuth = require("../../../1-main/1-helpers/validators");
const {config} = require('../../../1-main/config')

const login = async (req, res) => {

    const {email, password, rememberMe} = req.body;
    if (validateAuth(req, res)) {
        try {
            const user = await User.findOne({email}).exec()
            if (!user) {
                res.status(400).json({
                    resultCode: 1,
                    message: 'User not found'
                })
            } else if (!(await bCrypt.compare(password, user.password))) {
                res.status(400).json({
                    resultCode: 1,
                    message: 'Incorrect password'
                })
            } else {

                const token = jwt.sign(
                    {
                        id: user._id,
                        email: user.email
                    },
                    config.jwtSecret,
                    {expiresIn: '24h'}
                )

                try {
                    const newUser = await User.findByIdAndUpdate(
                        user._id,
                    ).exec()
                    if (!newUser) {
                        res.status(500).json({
                            resultCode: 1,
                            message: "login/user maybe toten?"
                        })
                    } else {
                        res.cookie('token', token)
                            .status(201).json({
                            data: {
                                id: user._id,
                                email: user.email,
                                rememberMe: user.rememberMe,
                            },
                            resultCode: 0
                        });
                    }

                } catch (e) {
                    res.status(400).json({
                        resultCode: 1,
                        message: 'Yoops, something went wrong(login)'
                    })
                }
            }
        } catch (e) {
            res.status(500).json({
                resultCode: 1,
                message: 'Yoops, something went wrong.'
            })
        }
    }
}

module.exports = login