const express = require('express')
const router = express.Router()
const { saveSetting, getSettingByUser, updateSetting} = require('../Controller/settings')
const authoriseUser = require('../Auth/auth')

router.post('/settings', authoriseUser, saveSetting)

router.get('/setting/:id', authoriseUser, getSettingByUser)

router.patch('/setting/update', authoriseUser, updateSetting)

module.exports = router