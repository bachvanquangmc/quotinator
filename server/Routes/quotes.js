const express= require('express')
const router=express.Router()

const { getQuotes, getQuoteByAuthor } = require('../Controller/quotes')



router.get('/quote', getQuotes)

router.get('/quotes/:author', getQuoteByAuthor)



module.exports = router



