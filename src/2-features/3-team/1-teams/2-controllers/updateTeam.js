const Team = require('../1-models/Team')

const updateTeam = async (req, res) => {
    try {
        const team_id = req.path.slice(1)
        const {name} = req.body

        const findTeam = await Team.findById(team_id)
        if (!findTeam) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found team'
            })
        }
        const qwe = await Team.findByIdAndUpdate(team_id, {name}, {new: true})
        console.log(qwe)
        res.status(200).json({
            resultCode: 0,
            message: 'team updated'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(update board).'
        })
    }
}

module.exports = updateTeam