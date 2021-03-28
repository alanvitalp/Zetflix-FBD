const Pool = require("pg").Pool;

const pool = new Pool({
  user: "aluno",
  password: "Ck0114",
  host: "200.129.44.249",
  port: 5432,
  database: "rene_473951"
});

module.exports = pool;