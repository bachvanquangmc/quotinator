const express= require('express')
const router = express.Router()
const { createFavs, getFavs, deleteFavs, getQuotes } = require('../Controller/favs');
const authoriseUser = require('../Auth/auth')

router.post('/saved', authoriseUser, createFavs)

router.get('/favs/:id', authoriseUser, getFavs)

// end point has to be diff from other, specific
router.delete('/favs/delete', deleteFavs)

router.get('/quotes/:author', getQuotes)

router.get('/saved/:id', getFavs)

module.exports = router


