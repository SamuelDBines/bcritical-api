const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SECRET_KEY';

exports.generateJWTToken = (userData) => {
  return jwt.sign(userData, SECRET_KEY);
};

exports.verifyToken = (jwtToken) => {
  try {
    return jwt.verify(jwtToken, SECRET_KEY);
  } catch (e) {
    return null;
  }
};
