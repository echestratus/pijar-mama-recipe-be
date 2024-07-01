const express = require('express')
const { pay, checkStatus } = require('../controllers/payment')
const route = express.Router()

route.post('/pay', pay)
route.get('/check/:id', checkStatus)


module.exports = route