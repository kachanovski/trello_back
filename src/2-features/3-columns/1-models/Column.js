const {model} = require("mongoose")
const {Schema} = require("mongoose")

const Column = new Schema(
    {
        board_id: {
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

module.exports = model("Column", Column);
