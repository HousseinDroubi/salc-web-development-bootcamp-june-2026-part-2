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


-- 3) Create table health_profiles, and add the foreign key
CREATE TABLE health_profiles(
    id SERIAL PRIMARY KEY,
    blood_type TEXT,
    create_at TIMESTAMP DEFAULT NOW(),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Or you can create table health_profiles, and add the foreign key after creating the table
CREATE TABLE health_profiles(
    id SERIAL PRIMARY KEY,
    blood_type TEXT,
    create_at TIMESTAMP DEFAULT NOW(),
    user_id INT
);

ALTER TABLE health_profiles
ADD CONSTRAINT fk_health_profiles_user 
FOREIGN KEY (user_id) REFERENCES users(id);

-- Add rows in table users
INSERT INTO users(first_name, last_name, age) VALUES
('Houssein', 'Droubi',29),
('Ali', 'Hijazi', 22),
('Mouhammad', 'Elghoul', 25);

-- Add rows in table health_profiles
INSERT INTO health_profiles(blood_type, user_id) VALUES
('B+', 1001),
('A+', 1002),
('A-', 1003);

-- A very very important note:
-- Try to delete users where id = 1001
DELETE FROM users WHERE id = 1001; -- This will throw an error. Why? because, there is a row inside health_profiles that is related to it.
-- What is the solution?

    -- Solution 1: Delete the related rows first
    DELETE FROM health_profiles WHERE user_id = 1001; 
    DELETE FROM users WHERE id = 1001; 

    -- Solution 2: Using on delete cascade and on delete set null. Will be explained later
