-- DROP DATABASE IF EXISTS todolist;

-- CREATE DATABASE todolist;

-- DROP TABLE IF EXISTS USER;

DROP TABLE IF EXISTS userinfo;

CREATE TABLE userinfo(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(50),
   task VARCHAR(50)
);
