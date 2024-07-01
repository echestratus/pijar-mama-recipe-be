const express = require('express')
const route = express.Router()
const recipeRoute = require('./recipes')
const authRoute = require('./auth')
const userRoute = require('./users')
const uploadRoute = require('./upload')
const paymentRoute = require('./payment')

route
    .use('/recipes', recipeRoute)
    .use('/auth', authRoute)
    .use('/users', userRoute)
    .use('/upload', uploadRoute)
    .use('/payment', paymentRoute)

module.exports = route