const Team = require('../1-models/Team')
const Board = require('../../../2-board/1-boards/1-models/Board')
const Column = require('../../../2-board/2-columns/1-models/Column')
const Card = require('../../../2-board/3-cards/1-models/Card')
const Member = require('../1-models/Member')

const deleteTeam = async (req, res) => {
    try {
        const id = req.path.slice(1);

        if (!id) {
            return res.status(500).json({
                resultCode: 1,
                message: 'team id not send in url'
            })
        }
        const team = await Team.findById(id).exec()

        if (!team) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found team'
            })
        }


        // const boards = await Board.find()
        // const myBoards = boards?.filter(i => i.team_id === team._id.toString())
        //
        // const columns = await Column.find()
        // const myColumns = columns?.filter(i => myBoards?.find( b => b._id.toString() === i.board_id))
        // console.log(boards)
        // const cards = await Card.find()
        // const myCards = cards?.filter(i => myColumns?.find( b => b._id.toString() === i.column_id))
        //
        //
        // const qwer = await Team.findById(id, async (qrr, col) => {
        //     //Member.find({team_id: id}).remove()
        //     const boards = await Board.find({team_id: id})
        //     const columns = await Column.find({}).deleteMany({board_id: {$in: ["6057ebce6ac0693194ffaaec", "6057ebf629546728ecc04076"]}})
        //     const cards = await Column.deleteMany({board_id: {$in: ["6057ebce6ac0693194ffaaec", "6057ebf629546728ecc04076"]}})
        //
        //     console.log(cards)
        // })
        // return false

        await Team.find({_id: id}).remove()
        await Member.find({team_id: id}).remove()

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