DROP DATABASE IF EXISTS cactus2;
CREATE DATABASE cactus2;

\c cactus2;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NULL,
  email VARCHAR UNIQUE NOT NULL,
  avatar VARCHAR,  
  userUID VARCHAR UNIQUE NULL,
  token VARCHAR UNIQUE NULL,
  created_at TIMESTAMP DEFAULT NOW()

);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author_id VARCHAR NOT NULL
  REFERENCES users(userUID) 
  ON UPDATE CASCADE 
  ON DELETE CASCADE,
  image_url VARCHAR NOT NULL, 
  caption VARCHAR,
  number_of_comments INT,
  number_of_likes INT,
  created_at TIMESTAMP DEFAULT NOW()
  
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL 
    REFERENCES posts(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    author_id VARCHAR NOT NULL
    REFERENCES users(userUID) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    comment_text VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL
    REFERENCES posts(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    like_author_id VARCHAR NOT NULL
    REFERENCES users(userUID) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()

  );

  CREATE UNIQUE INDEX single_like
    ON likes (post_id,like_author_id);


CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    follower_id VARCHAR NOT NULL
    REFERENCES users (userUID) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    following_id VARCHAR NOT NULL
    REFERENCES users (userUID) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
   
);

 CREATE UNIQUE INDEX single_follow
    ON followers(follower_id,following_id);