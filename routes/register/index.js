const jwt = require('../../common/token');

module.exports = (app, router) => {
  router.post('/register', (req, res) => {
    try {
      const user = req.body;
      const token = jwt.generateJWTToken(user);
      res.status(200).send({ 'x-access-token': token });
    } catch (e) {
      res.status(400).send(e);
    }
  });
  router.post('/verfiy', (req, res) => {
    try {
      const token = req.headers['x-access-token'];
      res.send(200, jwt.verifyToken(token));
    } catch (e) {
      res.send(400, e);
    }
  });
  app.use('/api', router);
};
