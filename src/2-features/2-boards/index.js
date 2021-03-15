const express = require('express')

const boards = express.Router();

boards.get('/', (req,res)=> {
    res.send('boardsPage')
})

module.exports = boards