const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");

const team = express.Router();

team.post('/login', login)
team.post('/register', register)
team.get('/me', authMe)
team.delete('/logout', logOut)

module.exports = team