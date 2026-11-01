CREATE DATABASE learn_sql_db;

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount DECIMAL(5,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

ALTER SEQUENCE transactions_id_seq RESTART WITH 1000;


INSERT INTO customers(first_name, last_name) VALUES
('Mouhammad', 'Charaf'),
('Hady', 'Mousataf'),
('Alaa', 'Al-Amin'),
('Houssein', 'Ahmad');

INSERT INTO transactions(amount, customer_id) VALUES
(4.99, 3),
(2.89, 2),
(3.38, 3),
(4.99, 1),
(2.89, NULL);


-- Get the number of transactions (using COUNT function)
SELECT COUNT(id) AS "number_of_transactions"
FROM transactions;

-- Get the minimum amount of transactions (using MIN function)
SELECT MIN(amount) AS "minimum_transaction_amount"
FROM transactions;

-- Get the maximum amount of transactions (using MAX function)
SELECT MAX(amount) AS "maximum_transaction_amount"
FROM transactions;

-- Get the summation of amount of transactions (using SUM function)
SELECT SUM(amount) AS "total_amount_of_transactions"
FROM transactions;

-- Get the average of amount of transactions (using AVG function)
SELECT AVG(amount) AS "average_amount_of_transactions"
FROM transactions;

-- Get the full name of customers (using concat function)
SELECT CONCAT(first_name, ' ', last_name) AS "full_name"
FROM customers;

-- Or you can do the following:
SELECT first_name || ' '|| last_name AS "full_name"
FROM customers;