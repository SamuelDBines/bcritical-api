const jwt = require('./token');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const details = jwt.verifyToken(authorization);
    if (!details) {
      res.send(401);
      return;
    }
    next();
  } catch (err) {
    res.send(500);
  }
};
