const express= require('express')
const router = express.Router()
const { createFavs, getFavs,getQuotes, deleteFavs } = require('../Controller/favs');
const authoriseUser = require('../Auth/auth')

router.post('/favs', authoriseUser, createFavs)

router.delete('/favs/delete', authoriseUser, deleteFavs)

router.get('/favs/:id', authoriseUser, getFavs)

module.exports = router


