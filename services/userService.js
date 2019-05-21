const db = require("../services/dbConnection");
const userService = {};

userService.create = body => {
  const { username, email, avatar, useruid, token } = body;
  return db.none(
    "INSERT INTO users (username, email, avatar, useruid, token) VALUES (${username}, ${email}, ${avatar}, ${useruid}, ${token})",
    { username, email, avatar, useruid, token }
  );
};

userService.read = () => {
  return db.any("SELECT * FROM users");
};

userService.readForSearch = username => {
  return db.any("SELECT * FROM users WHERE username = ${username}", {
    username
  });
};

userService.readForProfile = username => {
  return db.any("SELECT * FROM users WHERE username = ${username}", {
    username
  });
};

userService.readbyuid = useruid => {
  return db.any(
    "SELECT username, avatar FROM users WHERE useruid = ${useruid}",
    { useruid }
  );
};

userService.update = (uid, username, imgurl) => {
  return db.none(
    "UPDATE users SET username = ${username}, avatar = ${imgurl} WHERE useruid =${uid}",
    { uid, username, imgurl }
  );
};

userService.delete = id => {
  return db.none("DELETE FROM users WHERE id = ${id}", { id });
};

module.exports = userService;
