// src/services/userService.js
const { addUser, findUserByEmail } = require('../models/userModel');

const registerUser = (user) => {
  if (findUserByEmail(user.email)) {
    throw new Error('User with this email already exists');
  }
  addUser(user);
};

module.exports = { registerUser };
