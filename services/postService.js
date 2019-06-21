const db = require("../services/dbConnection");

postService = {};

postService.create = body => {
  const { author_id, image_url, caption } = body;
  const sql = `INSERT INTO posts (author_id, image_url, caption) VALUES ( $[author_id], $[image_url], $[caption])`;
  return db.none(sql, { author_id, image_url, caption });
};

postService.readNewsFeed = () => {
  const sql = `SELECT * FROM users INNER JOIN posts ON useruid = author_id`;
  return db.any(sql);
};

postService.readByUid = useruid => {
  const sql = `SELECT image_url, caption FROM posts JOIN users ON useruid = author_id WHERE useruid = $[useruid]`;
  return db.any(sql, { useruid });
};

postService.delete = id => {
  const sql = `DELETE FROM posts WHERE id=$[id]`;
  return db.none(sql, { id });
};

module.exports = postService;
