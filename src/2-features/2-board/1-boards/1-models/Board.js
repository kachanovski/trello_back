const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Board = new Schema(
    {
        team_id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    {
        created: "created"
    }
)

module.exports = model("Board", Board);
