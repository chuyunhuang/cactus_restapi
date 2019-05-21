// const pgp = require("pg-promise")({});
// const db = pgp("postgres://localhost/cactus2");
const db = require("../services/herokuDB");

module.exports = db;
