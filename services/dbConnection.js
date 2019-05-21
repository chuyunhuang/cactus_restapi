const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/cactus2");

module.exports = db;
