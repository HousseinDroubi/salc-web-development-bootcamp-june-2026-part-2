-- 1. GROUP BY aggregate all rows by a specific column.
-- 2. GROUP BY used with some function SUM(), COUNT(), MIN(), MAX(), AVG().
CREATE DATABASE learn_sql_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    referral_id INT
);

INSERT INTO customers (first_name,last_name,referral_id)
VALUES 
('Ali','Hassan',NULL),
('Amina','Mahmoud',1),
('Nour','Al-Amin',2),
('Zayn','Mahmoud',2);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount DECIMAL (4,2),
    customer_id INT,
    order_date Date,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

ALTER SEQUENCE transactions_id_seq RESTART WITH 1000;

INSERT INTO transactions (amount,customer_id,order_date)
VALUES 
(4.99,3,'2023-01-01'),
(2.89,2,'2023-01-01'),
(3.38,3,'2023-01-02'),
(4.99,1,'2023-01-02'),
(1.00,NULL,'2023-01-03'),
(2.49,4,'2023-01-03'),
(5.48,NULL,'2023-01-03');

-- How much amount we made per day, we have 3 different days 01, 02 and 03
SELECT order_date, SUM(amount) AS "total_amount_made"
FROM transactions
GROUP BY order_date;

-- The maximum amount of transactions we made per day
SELECT order_date, MAX(amount) AS "maximum_amount"
FROM transactions
GROUP BY order_date;

-- The minimum amount of transactions we made per day
SELECT order_date, MIN(amount) AS "minimum_amount"
FROM transactions
GROUP BY order_date;

-- The number of transactions we made per day
SELECT order_date, COUNT(amount) AS "number_of_transactions"
FROM transactions
GROUP BY order_date;

-- The average amount of transactions we made per day
SELECT order_date, AVG(amount) AS "average_amount"
FROM transactions
GROUP BY order_date;

-- The sum of amount regarding customer id
SELECT SUM(amount) AS "total_amount_of_transactions_per_customer", customer_id
FROM transactions GROUP BY customer_id;

-- The max of amount regarding customer id
SELECT MAX(amount) AS "maximum_amount_of_transactions_per_customer", customer_id
FROM transactions GROUP BY customer_id;

-- The min of amount regarding customer id
SELECT MIN(amount) AS "mainimum_amount_of_transactions_per_customer", customer_id
FROM transactions GROUP BY customer_id;

-- The avg of amount regarding customer id
SELECT AVG(amount) AS "average_amount_of_transactions_per_customer", customer_id
FROM transactions GROUP BY customer_id;

-- The count of amount regarding customer id
SELECT COUNT(amount) AS "number_of_transactions_per_customer", customer_id
FROM transactions GROUP BY customer_id;

-- The count of amount regarding customer id with a condition
SELECT COUNT(amount) AS "number_of_transactions_per_customer", customer_id
FROM transactions WHERE customer_id IS NOT NULL
GROUP BY customer_id;


-- The count of amount regarding customer id with a condition and a condition on count(amount)
SELECT COUNT(amount) AS "number_of_transactions_per_customer", customer_id
FROM transactions WHERE customer_id IS NOT NULL
GROUP BY customer_id
HAVING COUNT(amount) > 1;