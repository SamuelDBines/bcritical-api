const { ecrypt } = require('ecrypt');
const { read } = require('../../common/session');
const verify = (req, res) => {
  if (!req || !req.body) return res.status(404).send('Not found');
  const { tok, email } = req.body;
  if (!email || !tok) return res.status(404).send('Not found');
  const hash = ecrypt(tok, email);
  return res.json({ success: read(tok, email, hash) });
};

module.exports = (app, router) => {
  router.get('/verify', (req, res) => {
    return verify(req, res);
  });
  router.post('/verfiy', (req, res) => {
    return verify(req, res);
  });
  app.use('/api', router);
};
