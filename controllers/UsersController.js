const express = require('express')
const { User } = require('../models/User')

const router = express.Router()


// localhost:3000/users/register
router.post('/register', function (req, res) {
    console.log(req.body)
    let body = req.body
    const user = new User(body)
    user.save()
        .then(function (user) {
            res.send(user)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.get('/', function (req, res) {
    User.find()
        .then(function (users) {
            res.send(users)
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports = {
    usersRouter: router
}