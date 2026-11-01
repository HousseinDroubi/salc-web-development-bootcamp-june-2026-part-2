CREATE DATABASE learn_sql_db;

--1) Create table users
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INT
);

--2) Start counting for users.id from 1001
ALTER SEQUENCE users_id_seq RESTART WITH 1001;

--3) Create table phones, and add the foreign key
CREATE TABLE phones(
    id SERIAL PRIMARY KEY,
    name TEXT,
    price DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Or you can create table phones, and add the foreign key after creating the table
CREATE TABLE phones(
    id SERIAL PRIMARY KEY,
    name TEXT,
    price DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT
);

ALTER TABLE phones
ADD FOREIGN KEY(user_id) REFERENCES users(id);

-- Add rows in table users
INSERT INTO users(first_name, last_name, age) VALUES
('Houssein', 'Droubi',29),
('Ali', 'Hijazi', 22);

-- Add rows in table phones
INSERT INTO phones(name, price, user_id) VALUES
('X', 300, 1001),
('Y', 320, 1001),
('Z', 290, 1002);

-- A very very important note:
-- Try to delete users where id = 1001
DELETE FROM users WHERE id = 1001; -- This will throw an error. Why? because, there is a row inside phones that is related to it.
-- What is the solution?

    -- Solution 1: Delete the related rows first
    DELETE FROM phones WHERE user_id = 1001; 
    DELETE FROM users WHERE id = 1001; 

    -- Solution 2: Using on delete cascade and on delete set null. Will be explained later
