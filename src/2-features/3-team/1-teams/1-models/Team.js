const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Team = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String
        }
    }
)

module.exports = model("Team", Team);
