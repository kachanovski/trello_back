const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Team = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        creator_id: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        participants: {
            type: Array,
            required: true
        }
    }
)

module.exports = model("Team", Team);
