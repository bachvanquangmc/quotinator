const express= require('express')

const router=express.Router()

const { saveSetting, getSetting, getSettingByUser, updateSetting} = require('../Controller/settings')

const authoriseUser = require('../Auth/auth')

router.post('/settings', saveSetting)

router.get('/setting',authoriseUser, getSetting)

router.get('/setting/:id', getSettingByUser)

router.patch('/update/setting', updateSetting)

module.exports = router