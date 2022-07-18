const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({

  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  address: {
    type: String,
    minlength: 6,
    maxlength: 100,
    lowercase: true
  },

  dob: {
    type: Date,
    required: true
  },

  phone: {
    type: Number,
    minlength: 9,
    maxlength: 10
  },

  bday: {
    type: String
  }
});

module.exports.userSchema = userSchema;

require("../methods/index");

const User = mongoose.model("User", userSchema);

module.exports.User = User;
