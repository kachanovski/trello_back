const express = require('express')
const addCard = require("./2-controllres/addCard");
const getCards = require("./2-controllres/getCards");
const deleteCard = require("./2-controllres/deleteCard");
const updateCard = require("./2-controllres/updateCard");

const cards = express.Router();

cards.get('/', getCards)
cards.post('/', addCard)
cards.delete('/:id', deleteCard)
cards.put('/:id', updateCard)

module.exports = cards