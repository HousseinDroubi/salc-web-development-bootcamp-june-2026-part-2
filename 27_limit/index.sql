-- LIMIT
-- LIMIT specifies the number of records to be returned from a search query

CREATE DATABASE learn_sql_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

INSERT INTO customers (first_name,last_name)
VALUES 
('Ali','Al-Amin'),
('Zayn','Abdullah'),
('Noor','Nasser'),
('Abdullah','Hassan');

-- Get the following:
--1) First 2 customers
SELECT *
FROM customers 
LIMIT 2;

-- 2) First 1 customer after the first customer (skip 1, take 1)
SELECT *
FROM customers 
LIMIT 1 OFFSET 1;

-- 3) First 1 customer after the second customer (skip 2, take 1)
SELECT * 
FROM customers LIMIT 2, 1;