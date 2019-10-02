const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;
// console.log(Schema);
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return 'Invalid email format'
      }
    }
  },
  password: {
    type: [String],
    required: true,
    default: ['qwertyuiop']
  },

  mobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true
  },
  studentRollNumber: {
    type: String,
    required: true,
    unique: true
  },
  registerationTimeStamp: {
    type: Date,
    default: Date.now
  },
  roles: {
    type: String,
    default: 'user'
  },
  tokens: [
    {
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  allowAccess: {
    type: Boolean,
    default: true
  }
});

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}