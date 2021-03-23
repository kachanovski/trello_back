const User = require('../1-models/User')
const bCrypt = require("bcrypt")
const generateToken = require("../../../1-main/1-helpers/generateToken");

const login = async (req, res) => {

    const {email, password, rememberMe} = req.body

    try {
        const user = await User.findOne({email}).exec()
        if (!user) {
            res.status(400).json({
                resultCode: 1,
                message: 'Неверный email или пароль'
            })
        } else if (!(await bCrypt.compare(password, user?.password))) {
            res.status(400).json({
                resultCode: 1,
                message: 'Неверный email или пароль'
            })
        } else {

            const token = await generateToken(user, rememberMe)

            res.status(201)
                .cookie('token', token, {
                    sameSite: "none",
                    secure: true
                })
                .json({
                    data: {
                        id: user._id,
                        email: user?.email,
                        rememberMe: user?.rememberMe,
                    },
                    resultCode: 0
                });
        }
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что то пошло не так.Сервер не значет в чем проблема.'
        })
    }
}

module.exports = login