-- PRIMARY KEY is a keyword that is used to make sure that there are no duplicate rows in the table.
-- PRIMARY KEY is great for searching
-- PRIMARY KEY cannot accept NULL values
-- A table can contain only one single primary key
-- A primary key can be one column or multiple columns together

CREATE DATABASE learn_sql_db;

--1) Method 1: Adding a primary key when creating a table
CREATE TABLE users(
    user_id INT PRIMARY KEY,
    name TEXT NOT NULL    
);

--2) Method 2: Adding a primary key after creating a table
-- Query 1
CREATE TABLE users(
    user_id INT,
    name TEXT NOT NULL    
);

-- Query 2
ALTER TABLE users
ADD PRIMARY KEY (user_id);
