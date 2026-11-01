CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT
);

INSERT INTO users(username) VALUES 
('sara'),
('samy'),
('john'),
('sara'),
('eva');

-- Get all names without duplicates using distinct
-- DISTINCT ignores duplicate records in search query

SELECT DISTINCT username
FROM users;