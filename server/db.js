const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "krageplay",
  host: "localhost",
  port: 5432,
  database: "sports",
});

module.exports = pool;
