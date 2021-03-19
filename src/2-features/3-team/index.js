const express = require('express')
const createTeam = require("./2-controllers/createTeam");
const getMyTeams = require("./2-controllers/getMyTeams");
const deleteTeam = require("./2-controllers/deleteTeam");
const sendInvite = require("./2-controllers/sendInvite");
const checkInvite = require("./2-controllers/checkInvite");
const acceptInvite = require("./2-controllers/checkInvite");

const team = express.Router();

team.post('/', createTeam)
team.get('/my-teams', getMyTeams)
team.delete('/:id', deleteTeam)
team.post('/send-invite', sendInvite)
team.post('/accept-invite', acceptInvite)

module.exports = team