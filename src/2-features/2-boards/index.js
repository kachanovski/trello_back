const express = require('express')
const cors = require('cors')


const boards = express.Router();

let corsOptions = {
    credentials: true,
    origin: '*'
}

boards.get('/',cors(corsOptions), (req,res)=> {
    res.send('boardsPage')
})

module.exports = boards