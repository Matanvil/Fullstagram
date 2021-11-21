const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: true,
    validate: (value) => value.includes("@"),
  },
  fullName: { type: "string", required: true },
  username: { type: "string", required: true },
  password: {
    type: "string",
    required: true,
    validate: (value) => value.trim().length > 6,
  },
});

const User = mongoose.model('User', UsersSchema)

module.exports = User;
