const DATABASE_URL =
  "postgres://njietocmnfthvb:5c7200683a734bfaed915bf10598908bdf61912976bbfd976b08a729ffa602bd@ec2-54-225-95-183.compute-1.amazonaws.com:5432/da2svtmj4bj3ac";
const { Client } = require("pg");

const db = new Client({
  connectionString: DATABASE_URL,
  ssl: true
});

db.connect();

module.exports = db;
