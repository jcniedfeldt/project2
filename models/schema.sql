DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS fitnessapp;
CREATE DATABASE fitnessapp;

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

CREATE TABLE users(
    id AUTO_INCREMENT NOT NULL,
    post_time TIMESTAMP,
    user_id INT NOT NULL,
    dest_user_id INT NOT NULL,
    post TEXT NOT NULL,
    reactions int[] NULL,
    weight FLOAT NOT NULL,
    PRIMARY KEY (id)
);