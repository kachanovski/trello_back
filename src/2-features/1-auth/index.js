const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const isAuth = require("../../1-main/1-helpers/isAuth");
const sendMailSetNewPassword = require("./2-controllers/sendMailSetNewPassword");
const setNewPassword = require("./2-controllers/setNewPassword");

let auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.post('/me', isAuth(authMe))
auth.delete('/logout', isAuth(logOut))
auth.post('/forgot-password', sendMailSetNewPassword)
auth.post('/reset-password', setNewPassword)

module.exports = auth