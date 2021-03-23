const Team = require('../1-models/Team')
const User = require('../../../1-auth/1-models/User')
const Member = require('../1-models/Member')

const addMember = async (req, res) => {
    const {email, team_id} = req.body

    try {

        const user = await User.findOne({email}).exec()
        if (!user) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Пользователь не найден'
            })
        }

        const team = await Team.findById(team_id)

        if (!team) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Каманда не найдена'
            })
        }
        const member = await Member.findOne({team_id, user_id: user._id})

        if (member){
            return res.status(400).json({
                resultCode: 1,
                message: 'Участником уже состоит в данной команде'
            })
        }

        await Member.create({team_id, user_id: user._id})

        res.status(200).json({
            resultCode: 0,
            message: 'Участник добавлен'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Что-то пошло не так. Сервер не значет что это за ошибка '
        })
    }
}

module.exports = addMember