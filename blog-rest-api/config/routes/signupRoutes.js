const express = require('express')
const { signup } = require('../../controllers/authControllers/signUp')
const userRoutes = express.Router()

userRoutes.post('/', signup )


module.exports = userRoutes