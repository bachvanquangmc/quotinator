const express= require('express')
const router = express.Router()
const {saveSetting} = require('../Controller/settings')

router.post('/settings', saveSetting)

module.exports = router