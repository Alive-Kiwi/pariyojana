const express = require('express')
const router = express.Router()
const { usersRouter } = require('../controllers/UsersController')

router.use('/users', usersRouter)

module.exports = {
    router
}