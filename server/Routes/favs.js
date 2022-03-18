const express = require('express')
const router = express.Router()

const { createFav } = require("../Controller/favs")

router.post('/new/fav',createFav)


module.exports = router