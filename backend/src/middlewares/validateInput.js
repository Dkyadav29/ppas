// src/middlewares/validateInput.js
const { validateUser } = require('../utils/validation');

const validateInput = (req, res, next) => {
  const error = validateUser(req.body);
  if (error) {
    return res.status(400).json({ error });
  }
  next();
};

module.exports = validateInput;
