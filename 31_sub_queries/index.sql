-- Sub Queries are queries into another queries
CREATE DATABASE learn_sql_db;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    hourly_pay DECIMAL(4,2) DEFAULT 0.00,
    job TEXT,
    hire_date DATE DEFAULT NOW(),
    supervisor_id INT
);

INSERT INTO employees (name, hourly_pay, job, hire_date, supervisor_id)
VALUES 
('Ali',25.50,'manager','2023-01-02',NULL),
('Hassan',15.00,'cashier','2023-01-03',5),
('Zayn',12.50,'cook','2023-01-04',5),
('Noor',12.50,'cook','2023-01-05',5),
('Sara',17.25,'asst. manager','2023-01-06',1),
('Amina',10.00,'janitor','2023-01-07',5);

-- All employees, and another column contains average of hourly pay \
SELECT *, (SELECT AVG(hourly_pay) FROM employees) AS "average_of_hourly_pay" 
FROM employees;

-- All employees where their hourly pay is greater than the average
SELECT *
FROM employees
WHERE hourly_pay > (SELECT AVG(hourly_pay) FROM employees);

-- All employees where their ids are included in supervisor id
SELECT *
FROM employees
WHERE id IN (SELECT DISTINCT supervisor_id from employees WHERE supervisor_id IS NOT NULL);