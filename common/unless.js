module.exports = (middleware, ...paths) => {
  return (req, res, next) => {
    return paths.some((path) => {
      return req.path() === path ? next() : middleware(req, res, next);
    });
  };
};
