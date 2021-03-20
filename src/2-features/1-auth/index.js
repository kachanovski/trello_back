const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const findUserByToken = require("../../1-main/1-helpers/findUserByToken");

let auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.post('/me', findUserByToken(authMe))
auth.delete('/logout', findUserByToken(logOut))

module.exports = auth