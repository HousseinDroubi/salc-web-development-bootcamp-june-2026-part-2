-- ORDER BY
-- ORDER BY used with search queries to sort columns in ascending or descending order
-- We can use multiple columns with ORDER BY 

CREATE DATABASE learn_sql_db;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    hourly_pay DECIMAL(4,2) DEFAULT 0.00,
    job TEXT,
    hire_date DATE DEFAULT NOW()
);

INSERT INTO employees (first_name, last_name, hourly_pay, job, hire_date)
VALUES
('Ahmed','Al-Amin',25.50,'manager','2023-01-02'),
('Layla','Abdullah',15.00,'cashier','2023-01-03'),
('Sara','Abdullah',12.50,'cook','2023-01-04'),
('Noor','Hassan',12.50,'cook','2023-01-05'),
('Zayn','Mahmoud',17.25,'asst. manager','2023-01-06'),
('Ali','Ahmed',10.00,'janitor','2023-01-07');


-- Get the following:
--1) all employees sorting by first_name in ascending order
SELECT first_name
FROM employees
ORDER BY first_name ASC;

--2) all employees sorting by first_name in descending order
SELECT first_name
FROM employees
ORDER BY first_name DESC;