const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');

router.post('/favs', createFavs)

router.get('/favs/:id', getFavs)
module.exports = router