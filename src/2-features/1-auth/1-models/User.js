const {model} = require("mongoose")
const {Schema} = require("mongoose")

const User = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rememberMe: {
            type: Boolean,
            required: true
        },
        teams: {
            type: Array
        },
        boards: {
            type: Array
        },
        verified: {
            type: Boolean,
            required: true
        },
        avatar: {
            type: String
        },
        token: {
            type: String,
        },
        tokenDeathTime: {
            type: Number,
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordTokenDeathTime: {
            type: Number,
        },
        inviteToken: {
            type: Array
        },
        inviteTokenDeathTime: {
            type: Number
        }
    }
)

module.exports = model("User", User);
