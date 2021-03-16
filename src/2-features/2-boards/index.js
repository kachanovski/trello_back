const express = require('express')
const cors = require('cors')
const addBoard = require("./2-controllers/addBoard");
const deleteBoard = require("./2-controllers/deleteBoard");
const getBoards = require("./2-controllers/getBoards");
const getBoard = require("./2-controllers/getBoard");
const updateBoard = require("./2-controllers/updateBoard");


const boards = express.Router();

let corsOptions = {
    credentials: true,
    origin: '*'
}

boards.get('/',cors(corsOptions), getBoards)
boards.get('/:id',cors(corsOptions), getBoard)
boards.post('/',cors(corsOptions), addBoard)
boards.delete('/:id',cors(corsOptions), deleteBoard)
boards.put('/;id',cors(corsOptions), updateBoard)

module.exports = boards