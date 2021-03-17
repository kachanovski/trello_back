const express = require('express')
const getColumns = require("./2-controllers/getColumns");
const addColumn = require("./2-controllers/addColumn");
const deleteColumn = require("./2-controllers/deleteColumn");
const updateColumn = require("./2-controllers/updateColumn");

const column = express.Router();
column.get('/', getColumns)
column.post('/', addColumn)
column.delete('/:id', deleteColumn)
column.put('/:id', updateColumn)
module.exports = column