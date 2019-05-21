const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/cactus");

module.exports = db;
