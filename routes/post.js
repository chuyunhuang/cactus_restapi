const express = require("express");
const postRouter = express.Router();
const postService = require("../services/postService");

//Create Post
postRouter.post("/", (req, res) => {
  postService
    .create(req.body)
    .then(() => {
      res.status(200);
      res.json({ "post created": true });
    })
    .catch(err => {
      res.status(400);
      res.json({ err });
    });
});

postRouter.get("/", (req, res) => {
  postService
    .readNewsFeed()
    .then(data => {
      res.status(200);
      res.json({ "post data": data });
    })
    .catch(err => {
      res.status(400);
      res.json({ err });
    });
});

module.exports = postRouter;
