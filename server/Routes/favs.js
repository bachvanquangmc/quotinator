const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');
const { deleteFavs } = require('../Controller/favs');
const { getQuotes } = require('../Controller/favs');
const {deleteFavs} = require('../Controller/favs')

router.post('/saved', createFavs)

router.get('/favs/:id', getFavs)

// end point has to be diff from other, specific
router.delete('/favs/delete', deleteFavs)

module.exports = router

router.get('/quotes/:author', getQuotes)

router.get('/saved/:id', getFavs)

router.delete('/delete/favs', deleteFavs)

module.exports = router


