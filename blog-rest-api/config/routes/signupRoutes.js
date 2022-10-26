const express = require('express')
const { signup, loginControler } = require('../../controllers/authControllers/signUp')
const userRoutes = express.Router()

userRoutes.post('/singup', signup )
userRoutes.post('/login', loginControler )


module.exports = userRoutes