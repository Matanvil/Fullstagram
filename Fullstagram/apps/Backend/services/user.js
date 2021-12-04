const User = require('../models/users')

const createUser = (data) => {
  const user = new User(data)
  return user.save() 
}

const getUser = (userId) => {
    return User.findById(userId)
}

const createToken = (user) => {
  
}

module.exports = {createUser, getUser}