const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');

router.post('/favs', createFavs)

router.get('/favs/:id', getFavs)

module.exports = router

/*
Quang: Login, save setting, authoriseUser for setting and fav
Leighai: Delete fav
Maggie: get fav quote by author
Claudia: update setting, get setting
*/