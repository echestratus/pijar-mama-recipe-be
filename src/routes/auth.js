const express = require('express')
const { login, register, logout, refreshToken } = require('../controllers/auth')
const { protect } = require('../middlewares/auth')
const route = express.Router()

route
    .post('/login', login)
    .post('/register', register)
    .get('/logout', protect, logout)
    .post('/refresh-token', refreshToken)


module.exports = route