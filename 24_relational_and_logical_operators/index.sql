-- Relational Operators (>, >=, <, <=, =, !=)
-- Logical Operators (AND, OR, NOT)
CREATE DATABASE learn_sql_db;


CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    hourly_pay DECIMAL(4,2) DEFAULT 0.00,
    job TEXT NOT NULL,
    hire_date TIMESTAMP DEFAULT NOW()
);

INSERT INTO employees(first_name,last_name,hourly_pay,job, hire_date) VALUES
('Layla', 'Hassan', 25.50, 'manager', '2023-01-02'),
('Noor', 'Abdullah', 15.00, 'cook', '2023-01-03'),
('Yousuf', 'Saleh', 22.50, 'hr', '2023-01-04'),
('Zayn', 'Mahmoud', 12.50, 'developer', '2023-01-05'),
('Amina', 'Ahmad', 17.25, 'cashier', '2023-01-06'),
('Mariam', 'Charaf', 25.50, 'manager', '2023-01-07');

-- Get the following:

-- 1) hire date less than '2023-01-05' and job is 'cook'
SELECT *
FROM employees
WHERE hire_date <'2023-01-05' AND job = 'cook';

-- 2) job is cook or cashier
SELECT *
FROM employees
WHERE job = 'cook' OR job = 'cashier';

-- OR you can do the following:
SELECT *
FROM employees
WHERE job IN ('cook', 'cashier');

-- 3) job is manager
SELECT *
FROM employees
WHERE job = 'manager';

-- 4) hire_date is between '2023-01-04' and '2023-01-07'
SELECT *
FROM employees
WHERE hire_date BETWEEN '2023-01-04' AND '2023-01-07';

-- 5) job is one of the 'cook', 'cashier', 'developer'
SELECT *
FROM employees
WHERE job = 'cook' OR job = 'cashier' OR job = 'developer';

-- OR you can do the following:
SELECT *
FROM employees
WHERE job IN ('cook', 'cashier', 'developer');
