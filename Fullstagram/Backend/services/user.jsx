const User = require('../models/users')

const createUser = (data) => {
  const user = new User(data)
  return user.save() 
}

const getUser = (userId) => {
    return User.findById(userId)
}

module.exports = {createUser, getUser}