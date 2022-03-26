const express = require('express')
const router = express.Router()
const { signup, login, getCurrentUser } = require('../Controller/users');
const authoriseUser = require('../Auth/auth')

router.post('/signup', signup)

router.post('/login', login)

// router.get('/me', authoriseUser, getCurrentUser)


module.exports = router