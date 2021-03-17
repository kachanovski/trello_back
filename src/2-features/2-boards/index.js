const express = require('express')

const addBoard = require("./2-controllers/addBoard");
const deleteBoard = require("./2-controllers/deleteBoard");
const getBoards = require("./2-controllers/getBoards");
const getBoard = require("./2-controllers/getBoard");
const updateBoard = require("./2-controllers/updateBoard");


const boards = express.Router();

boards.get('/', getBoards)
boards.get('/:id', getBoard)
boards.post('/', addBoard)
boards.delete('/:id', deleteBoard)
boards.put('/:id', updateBoard)

module.exports = boards


