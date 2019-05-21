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

app.use("/user", userRouter);

module.exports = { app };
