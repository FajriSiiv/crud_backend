const mysql = require("mysql2");
require("dotenv").config();

const host = process.env.DB_HOST;
const userName = process.env.DB_USERNAME;
const dbName = process.env.DB_NAME;

const dbPool = mysql.createPool({
  host: host,
  user: userName,
  database: dbName,
});

// dbpool bersifat asycn
module.exports = dbPool.promise();
