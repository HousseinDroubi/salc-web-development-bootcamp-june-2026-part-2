CREATE DATABASE learn_sql_db;

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

INSERT INTO customers(first_name, last_name) VALUES 
('Houssein','Al-Amin'),
('Zayn','Ahmad'),
('Hady', 'Jaafar'),
('Abbass','Charaf');

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount DECIMAL(5,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE SET NULL
);

INSERT INTO transactions(amount, customer_id) VALUES
(5.5, 3),
(4.92, 2),
(7.32, 3),
(1.34, 1),
(2.68, NULL);

-- LEFT JOIN
-- Returns all rows from left table, and matching rows from the right table (or NULL if no match)

SELECT *
FROM transactions LEFT JOIN customers
ON transactions.customer_id = customers.id;