const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "scale_grow",
  password: process.env.SQLPASSWORD,
});

module.exports = pool.promise();
