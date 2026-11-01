-- ORDER BY
-- ORDER BY used with search queries to sort columns in ascending or descending order
-- We can use multiple columns with ORDER BY 


CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount DECIMAL (4,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

ALTER SEQUENCE transactions_id_seq RESTART WITH 1000;

INSERT INTO customers (first_name,last_name)
VALUES 
('Layla','Hassan'),
('Ahmed','Mahmoud'),
('Zayn','Nasser'),
('Amina','Al-Amin');

INSERT INTO transactions (amount,customer_id)
VALUES (4.99,3),
(2.89,2),
(3.38,3),
(4.99,1),
(2.89,NULL);

-- Get the following:
--1) all records sorting by amount in ascending order, then customer_id in ascending order
SELECT *
FROM transactions
ORDER BY amount ASC, customer_id ASC;

--2) all records sorting by amount in ascending order, then customer_id in descending order
SELECT *
FROM transactions
ORDER BY amount ASC, customer_id DESC;
