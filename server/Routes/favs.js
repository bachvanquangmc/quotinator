const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');
const { deleteFavs } = require('../Controller/favs');
const { getQuotes } = require('../Controller/favs');
const {deleteFavs} = require('../Controller/favs')
const authoriseUser = require('../Auth/auth')

router.post('/saved', authoriseUser, createFavs)

router.get('/favs/:id', authoriseUser, getFavs)

// end point has to be diff from other, specific
router.delete('/favs/delete', deleteFavs)

router.get('/quotes/:author', getQuotes)

router.get('/saved/:id', getFavs)

router.delete('/delete/favs', deleteFavs)

module.exports = router


