const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const cors = require('cors')


let auth = express.Router();


let corsOptions = {
    credentials: true,
    origin: '*'
}

auth.post('/login',cors(corsOptions), login)
auth.post('/register',cors(corsOptions), register)
auth.get('/me',cors(corsOptions), authMe)
auth.delete('/logout',cors(corsOptions), logOut)

module.exports = auth