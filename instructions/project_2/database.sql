CREATE DATABASE todos_db;

-- Open query tool inside todos_db and execute the following queries
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    added_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT check_username CHECK (CHAR_LENGTH(username) > 3)
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    added_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    CONSTRAINT check_title CHECK (CHAR_LENGTH(title) > 10),
    FOREIGN KEY (user_id) REFERENCES users(id)
);