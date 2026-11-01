-- WILD CARD is a way for filtering data on numbered or not numbered characters
    -- % not numbered characters
    -- _ one character exactly
-- LIKE is a case sensitive
-- ILIKE is not a case sensitive

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
('Ahmed','Hassan',25.50,'manager','2022-01-02'),
('Noor','Abdullah',15.00,'cashier','2022-01-03'),
('Ali','Saleh',12.50,'cook','2023-01-04'),
('Zayn','Mahmoud',12.50,'cook','2023-03-05'),
('Hassan','Al-Amin',17.25,'asst. manager','2023-04-06'),
('Sara','Al-Amin',10.00,'janitor','2023-01-07');


-- Get the following
--1) first_name starts with 'A'
SELECT *
FROM employees
WHERE first_name LIKE 'A%';

-- first_name starts with 'a' or 'A'
SELECT *
FROM employees
WHERE first_name ILIKE 'A%';

--2) first_name starts with 'Ah'
SELECT *
FROM employees
WHERE first_name LIKE 'Ah%';

-- first_name starts with 'Ah', 'AH', 'ah' or 'aH'
SELECT *
FROM employees
WHERE first_name ILIKE 'ah%';

--3) hire_date year starts with '2023' 
SELECT *
FROM employees
WHERE CAST(hire_date AS TEXT) LIKE '2023%';

-- Option B (PostgreSQL Best Practice for dates): Using a date range
-- SELECT * FROM employees WHERE hire_date >= '2023-01-01' AND hire_date < '2024-01-01';

--4) last_name ends with 'h'
SELECT *
FROM employees
WHERE last_name LIKE '%h';

--5) job ends with 'ook' and only one character before it
SELECT *
FROM employees
WHERE job LIKE '_ook';

--6) job contains with 'ook', only one character before it and one character after it
SELECT *
FROM employees
WHERE job LIKE '_ook_';

--7) job contains with 'oo', only one character before it and one character after it
SELECT *
FROM employees
WHERE job LIKE '_oo_';

--8) hire_date month is 01
-- 2022-01-02
SELECT *
FROM employees
WHERE CAST(hire_date AS TEXT) LIKE '____-01-__';

--9) job's second character is 'a'
SELECT *
FROM employees
WHERE job LIKE '_a%';
