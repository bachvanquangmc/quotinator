const express= require('express')
const router = express.Router()
const { createFavs, getFavs, deleteFavs } = require('../Controller/favs');
const authoriseUser = require('../Auth/auth')

router.post('/favs', authoriseUser, createFavs)

router.get('/favs/:id', authoriseUser, getFavs)

router.delete('/favs/delete', authoriseUser, deleteFavs)

// router.get('/quotes/:author', getQuotes)

router.get('/saved/:id', getFavs)

router.get('/favs/:id', authoriseUser, getFavs)

module.exports = router


