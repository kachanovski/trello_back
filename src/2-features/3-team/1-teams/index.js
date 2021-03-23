const express = require('express')
const createTeam = require("./2-controllers/createTeam");
const getMyTeams = require("./2-controllers/getMyTeams");
const deleteTeam = require("./2-controllers/deleteTeam");
const sendInviteToTeam = require("./2-controllers/sendInviteToTeam");
const acceptInviteToTeam = require("./2-controllers/acceptInviteToTeam");
const addMember = require("./2-controllers/addMember");
const updateTeam = require("./2-controllers/updateTeam");
const findUser = require("./2-controllers/findUser");

const team = express.Router();

team.post('/', createTeam)
team.delete('/:id', deleteTeam)
team.put('/:id', updateTeam)
team.get('/my-teams', getMyTeams)

team.get('/find', findUser )
team.post('/member', addMember)
team.post('/send-invite', sendInviteToTeam)
team.post('/accept-invite', acceptInviteToTeam)


module.exports = team