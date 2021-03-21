const Team = require('../1-models/Team')

const deleteTeam = async (req, res) => {
    try {
        const id = req.path.slice(1);
        if (!id) {
            return res.status(500).json({
                resultCode: 1,
                message: 'team id not send in url'
            })
        }
        const team =  await Team.findById(id)

        if(!team){
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found team'
            })
        }

        await Team.findByIdAndDelete(id)
        res.status(200).json({
            resultCode: 0,
            message: 'team deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(delete team).'
        })
    }
}

module.exports = deleteTeam