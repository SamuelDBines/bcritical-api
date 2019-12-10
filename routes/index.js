module.exports = (app, router) => {
  require('./login/index')(app, router);
  // require('./verify/index')(app, router);
  require('./register/index')(app, router);
  require('./database/index')(app, router);
};
