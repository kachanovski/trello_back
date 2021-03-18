const express = require('express')
const createTeam = require("./2-controllers/createTeam");
const getMyTeams = require("./2-controllers/getMyTeams");
const deleteTeam = require("./2-controllers/deleteTeam");

const team = express.Router();

team.post('/', createTeam)
team.get('/my-teams', getMyTeams)
team.delete('/:id', deleteTeam)

module.exports = team