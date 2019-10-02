const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicesSchema = new Schema({
  serviceName: {
    type: String
  },
  serviceDescription: {
    type: String
  }
});

const Services = mongoose.model('Services', servicesSchema);

module.exports = {
  Services
};
