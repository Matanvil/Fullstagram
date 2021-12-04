const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: (value) => value.includes("@"),
  },
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  password: {
    type: String,
    required: true,
    validate: (value) => value.trim().length > 6,
  },
  authenticationMethod: {created: String, identifier: String }
});

const User = mongoose.model('User', UsersSchema)

module.exports = User;
