const jwt = require('../../common/token');

module.exports = (app, router) => {
  router.post('/login', (req, res) => {
    try {
      const { authorization } = req.headers;
      const details = jwt.verifyToken(authorization);
      if (!details) {
        res.send(401);
        return;
      }
      res.send(200);
    } catch (err) {
      res.send(500);
    }
  });
  app.use('/api', router);
};
