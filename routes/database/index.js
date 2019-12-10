const postgresHandler = require("./postgresHandler");

const postgres = new postgresHandler({
  user: "doadmin",
  host: "anonimos-do-user-3651142-0.db.ondigitalocean.com",
  database: "develop",
  password: "w9q51dtn397pv8fk",
  port: 25060,
  ssl: true
});
module.exports = (app, router) => {
  router.get("/database/:responseType", async (req, res) => {
    const { responseType } = req.params;
    const { params } = req.body;
    const response = await postgres.handleResponse(responseType, params);
    return res.status(200).send(response);
  });

  app.use("/api", router);
};
