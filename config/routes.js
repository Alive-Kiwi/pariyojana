const express = require('express');
const router = express.Router();
const { usersRouter } = require('../controllers/UsersController');
const { servicesRouter } = require('../controllers/ServicesController');

router.use('/users', usersRouter);
router.use('/services', servicesRouter);

module.exports = {
  router
};
