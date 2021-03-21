const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Member = new Schema(
    {
        team_id: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean
        }
    }
)

module.exports = model("Member", Member);
