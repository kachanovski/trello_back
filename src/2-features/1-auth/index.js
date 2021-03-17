const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const cors = require('cors')


let auth = express.Router();


let corsOptions = {
    credentials: true
}

auth.post('/login', login)
auth.post('/register',cors(), register)
auth.get('/me',cors(), authMe)
auth.delete('/logout',cors(), logOut)

module.exports = auth