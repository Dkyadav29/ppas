// src/routes/userRoutes.js
const express = require('express');
const { signUp } = require('../controllers/userController');
const validateInput = require('../middlewares/validateInput');

const router = express.Router();

router.post('/signup', validateInput, signUp);

module.exports = router;
