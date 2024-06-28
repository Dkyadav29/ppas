// src/utils/validation.js
exports.validateUser = ({ name, email, phone, password, confirmPassword }) => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      return 'All fields are required';
    }
    if (password !== confirmPassword) {
      return 'Passwords must match';
    }
    return null;
  };
  