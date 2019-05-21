const express = require("express");
const userRouter = express.Router();
const userService = require("../services/userService");

//Create User
userRouter.post("/", (req, res) => {
  userService
    .create(req.body)
    .then(() => {
      res.status(200);
      res.json({ "successfully created user": true });
    })
    .catch(err => {
      res.status(400);
      res.json({
        "successfully created user": false,
        err: err
      });
    });
});

//Read User
userRouter.get("/", (req, res) => {
  userService
    .read()
    .then(data => {
      res.status(200);
      res.json({
        success: true,
        data: data
      });
    })
    .catch(err => {
      res.status(400);
      res.json({
        success: false,
        err: err
      });
    });
});

userRouter.get("/userprofile/:useruid", (req, res) => {
  //const {useruid} = req.body
  //console.log('p', req.query)
  const { useruid } = req.params;
  userService
    .readbyuid(useruid)
    .then(data => {
      res.status(200);
      res.json({
        success: true,
        data: data
      });
    })
    .catch(err => {
      res.status(404);
      res.json({
        success: false,
        err: err
      });
    });
});

userRouter.get("/searchuser/:username", (req, res) => {
  const { username } = req.params;
  console.log(req.params.username);
  userService
    .readForSearch(username)
    .then(data => {
      console.log("BACKEND", data);
      res.status(200);
      res.json({
        success: true,
        data: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400);
      res.json(err);
    });
});

userRouter.get("/readuserprofile/:username", (req, res) => {
  const { username } = req.params;
  userService
    .readForProfile(username)
    .then(data => {
      res.status(200);
      res.json({
        success: true,
        data: data
      });
    })
    .catch(err => {
      res.status(400);
      res.json({ err });
    });
});

//Update User
userRouter.put("/update", (req, res) => {
  const { uid, username, imgurl } = req.body;

  userService
    .update(uid, username, imgurl)
    .then(() => {
      res.status(200);
      res.json({ "successfully updated user": true });
    })
    .catch(err => {
      res.status(400);
      res.json({
        "successfully updated user": false,
        err: err
      });
    });
});

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  userService
    .delete(id)
    .then(() => {
      res.status(200);
      res.json({
        "successfully deleted user": true
      });
    })
    .catch(err => {
      res.status(400);
      res.json({
        "successfully deleted user": false,
        err: err
      });
    });
});

module.exports = userRouter;
