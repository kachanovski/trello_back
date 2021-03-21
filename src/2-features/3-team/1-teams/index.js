const express = require('express')
const createTeam = require("./2-controllers/createTeam");
const getMyTeams = require("./2-controllers/getMyTeams");
const deleteTeam = require("./2-controllers/deleteTeam");
const sendInvite = require("./2-controllers/sendInvite");
const acceptInvite = require("./2-controllers/checkInvite");
const addMember = require("./2-controllers/addMember");
const updateTeam = require("./2-controllers/updateTeam");

const team = express.Router();

team.post('/', createTeam)
team.delete('/:id', deleteTeam)
team.put('/:id', updateTeam)
team.get('/my-teams', getMyTeams)


team.post('/send-invite', sendInvite)
team.post('/accept-invite', acceptInvite)
team.post('/member', addMember)

module.exports = team