const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");

let auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.get('/me', authMe)
auth.delete('/logout', logOut)

module.exports = auth