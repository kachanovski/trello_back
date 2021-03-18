const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Card = new Schema(
    {
        column_id: {
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

module.exports = model("Card", Card);
