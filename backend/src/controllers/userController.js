// src/controllers/userController.js
const { registerUser } = require('../services/userService');

const signUp = (req, res) => {
  try {
    registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
    
  }
};

module.exports = { signUp };
