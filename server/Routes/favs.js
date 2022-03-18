const express= require('express')
const router = express.Router()
const { createFavs } = require('../Controller/favs');
const { getFavs } = require('../Controller/favs');

router.post('/saved', createFavs)

router.get('/saved/:id', getFavs)
module.exports = router