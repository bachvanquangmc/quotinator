const express= require('express')
const router = express.Router()
const {saveSetting, updateSetting} = require('../Controller/settings')

router.post('/settings', saveSetting)
router.patch('/settings', updateSetting)

module.exports = router