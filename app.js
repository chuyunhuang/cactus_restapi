const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/user");
//Middleware
app.use(cors());
app.use(morgan("short"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("Server working!");
});

// app.use("/user", userRouter);

app.get("/user", (req, res) => {
  const DATABASE_URL =
    "postgres://njietocmnfthvb:5c7200683a734bfaed915bf10598908bdf61912976bbfd976b08a729ffa602bd@ec2-54-225-95-183.compute-1.amazonaws.com:5432/da2svtmj4bj3ac";
  const { Client } = require("pg");

  const db = new Client({
    connectionString: DATABASE_URL,
    ssl: true
  });

  db.connect();

  db.query("SELECT * FROM users", (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    db.end();
  });
});

module.exports = { app };
