-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

-- DROP DATABASE IF EXISTS fitnessapp;
-- CREATE DATABASE fitnessapp;
USE egqvrszrhq9iuhyx;

Drop table if exists users;
CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    account_created TIMESTAMP,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birthday DATE NOT NULL,
    height FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    PRIMARY KEY (id)
);

Drop table if exists posts;
CREATE TABLE posts(
    id int AUTO_INCREMENT NOT NULL,
    post_time TIMESTAMP,
    user_id INT NOT NULL,
    dest_user_id INT NOT NULL,
    post TEXT NOT NULL,
    -- reactions_id int NULL,
    weight FLOAT NOT NULL,
    PRIMARY KEY (id)
);

-- CREATE TABLE reactions(
--     id AUTO_INCREMENT NOT NULL,
--     post_time TIMESTAMP,
--     user_id INT NOT NULL,
--     dest_user_id INT NOT NULL,
--     post TEXT NOT NULL,
--     reactions_id int NULL,
--     weight FLOAT NOT NULL,
--     PRIMARY KEY (id)
-- );