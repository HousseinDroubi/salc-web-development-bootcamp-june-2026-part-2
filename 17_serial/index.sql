-- AUTO_INCREMENT is a keyword that is used to automatically add the id by 1 on last id value

CREATE DATABASE learn_sql_db;

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount DECIMAL(4,2)
);

-- no need to add the id (best practice)
INSERT INTO transactions(amount) VALUES
(10.40),
(3.40),
(99);

-- Let's say that I want the id column to start from 1000
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount DECIMAL(4,2)
);

-- Reset the underlying sequence to start at 1000
ALTER SEQUENCE transactions_id_seq RESTART WITH 1000;