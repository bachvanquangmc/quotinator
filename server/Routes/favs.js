const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');
const { getQuotes } = require('../Controller/favs');

router.post('/saved', createFavs)

router.get('/favs/:id', getFavs)

router.get('/quotes/:author', getQuotes)

router.get('/saved/:id', getFavs)

module.exports = router