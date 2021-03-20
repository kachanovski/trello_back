const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const isAuth = require("../../1-main/1-helpers/isAuth");

let auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.post('/me', isAuth(authMe))
auth.delete('/logout', isAuth(logOut))

module.exports = auth