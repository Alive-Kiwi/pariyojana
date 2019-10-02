const express = require('express');
const { User } = require('../models/User');

const router = express.Router();

// localhost:3000/users/register
router.post('/register', function(req, res) {
  console.log(req.body);
  let body = req.body;
  const user = new User(body);
  user
    .save()
    .then(function(user) {
      res.send(user);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  User.find()
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:mobile', function(req, res) {
  const body = req.body;
  const mobile = req.body.params;
  User.findOneAndUpdate(mobile, body, { new: true })
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:id', function(req, res) {
  console.log(req.body.params);
  const id = req.body.params;
  User.deleteOne(id)
    .then(function(user) {
      res.send(user);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  usersRouter: router
};
