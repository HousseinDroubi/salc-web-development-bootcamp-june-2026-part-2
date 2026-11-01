DROP DATABASE todos_db;
CREATE DATABASE todos_db;
USE todos_db;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    username  VARCHAR(10) UNIQUE NOT NULL,
    password  VARCHAR(255) NOT NULL,
    added_at DATETIME DEFAULT NOW(),
	CONSTRAINT check_username CHECK (CHAR_LENGTH(username) > 3)
);

CREATE TABLE todos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title  VARCHAR(50) NOT NULL,
    added_at DATETIME DEFAULT NOW(),
    user_id INT NOT NULL,
	CONSTRAINT check_title CHECK (CHAR_LENGTH(title) > 10),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
