const express = require('express');
const { Services } = require('../models/User');

const router = express.Router();

//Create Service
//Read Service
//Delete Service
//Edit Service

router.post('/create', function(req, res) {
  let body = req.body;
  const service = new Services(body);
  service
    .save()
    .then(function(service) {
      res.send(service);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/fetch', function(req, res) {
  Services.find()
    .then(function(services) {
      res.send(services);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:serviceName', function(req, res) {
  const body = req.body;
  const serviceName = req.body.params;
  Services.findOneAndUpdate(serviceName, body, { new: true })
    .then(function(service) {
      res.send(service);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:serviceName', function(req, res) {
  console.log(req.body.params);
  const serviceName = req.body.params;
  Services.deleteOne(serviceName)
    .then(function(service) {
      res.send(service);
    })
    .catch(function(err) {
      res.send(err);
    });
});
module.exports = {
  servicesRouter: router
};
