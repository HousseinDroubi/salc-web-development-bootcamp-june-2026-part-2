-- Views
-- 1. Views are virtual table based on result of SQL statement. They are up-to-date
-- 2. They are not real tables, but can be interacted with as if they were.

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    hourly_pay DECIMAL(4,2) DEFAULT 0.00,
    job TEXT,
    hire_date DATE DEFAULT NOW(),
    supervisor_id INT,
    email TEXT
);

INSERT INTO employees (first_name, last_name, hourly_pay, job, hire_date, supervisor_id,email)
VALUES
('Hassan','Mahmoud',25.50,'manager','2023-01-02',NULL,'hassan@example.com'),
('Noor','Al-Amin',15.00,'cashier','2023-01-03',5,'noor@example.com'),
('Amina','Mahmoud',12.50,'cook','2023-01-04',5,'amina@example.com'),
('Ali','Zayn',12.50,'cook','2023-01-05',5,'ali@example.com'),
('Hassan','Hady',17.25,'asst. manager','2023-01-06',1,'zayn@example.com'),
('Ali','Al-Amin',10.00,'janitor','2023-01-07',5,'houssam@example.com');

-- 1. Create a view that shows all emails called employees_emails
CREATE VIEW employees_emails AS
SELECT email FROM employees;

-- 2. Create a view that shows all name called employees_names that contains no repeated names
CREATE VIEW employees_names AS
SELECT DISTINCT first_name
FROM employees;

-- 3. Create a view that concat first_name with last_name
CREATE VIEW employees_full_names AS
SELECT DISTINCT CONCAT(first_name, ' ', last_name) AS "full_name"
FROM employees;

-- OR:
CREATE VIEW employees_full_names AS
SELECT DISTINCT first_name || ' ' || last_name AS "full_name"
FROM employees;

-- How to drop a view
DROP VIEW view_name;