-- 1. ROLLUP comes with GROUP BY
-- 2. ROLLUP produces another row (at the first) that shows the GRAND TOTAL
CREATE DATABASE learn_sql_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    referral_id INT
);

INSERT INTO customers (first_name,last_name,referral_id)
VALUES 
('Noor','Mahmoud',NULL),
('Zayn','Hassan',1),
('Hady','Al-Amin',2),
('Amina','Mahmoud',2);

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

-- The sum of amount of each date
SELECT order_date, SUM(amount) AS "total_amount_made"
FROM transactions
GROUP BY order_date;

-- The sum of amount of each date and a row that shows the total amount
SELECT order_date, SUM(amount) AS "total_amount_made"
FROM transactions
GROUP BY ROLLUP (order_date);

-- The number of transactions in each day
SELECT order_date, COUNT(amount) AS "number_of_transactions"
FROM transactions
GROUP BY order_date;

-- The number of transactions in each day with a row that show the total number of transactions
SELECT order_date, COUNT(amount) AS "number_of_transactions"
FROM transactions
GROUP BY ROLLUP (order_date);
