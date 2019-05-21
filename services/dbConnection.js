const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/cactus");
// const db = require("./herokuDB");

module.exports = db;
