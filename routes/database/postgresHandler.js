const { Pool } = require("pg");
const queryString = require("./statements");

class PostgresHandler {
  constructor(props) {
    this.pool = new Pool(props);
  }

  async handleResponse(handle, ...params) {
    if (!queryString[handle]) return null;
    const client = await this.pool.connect();
    let result = undefined;
    const { statement, type, key } = queryString[handle];
    try {
      if (!params[0]) result = await client.query(statement);
      else result = await client.query(statement, params);
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
    return this.resultFactory(type, result, key);
  }

  resultFactory(type, result, key) {
    const { rows, rowCount } = result;
    switch (type) {
      case "rows":
        return rows;
      case "oneItem":
        return rows.length ? rows[0] : undefined;
    }
  }
}

module.exports = PostgresHandler;
