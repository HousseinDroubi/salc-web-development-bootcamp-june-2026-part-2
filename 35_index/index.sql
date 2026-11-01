-- 1- INDEX is a BTree data structure.
-- 2- Indexes are used to find values within a specific column more quickly.
-- 3- PostgreSQL (like MySQL) uses sequential scans if no index is available. The more expensive the operation is gonna be.
-- 4- Sometimes we do have an index on id

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

-- * To show indexes
-- ! By default, employees has index on id, that's why searching for a customer using id is so much fast
-- ! but, searching for employees by their first_name or last_name is more expensive.
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'employees';

-- * Create an index for email (one-column)
CREATE INDEX email_idx
ON employees(email);

SELECT email from employees where email LIKE '%na@example.com';

-- * Drop INDEX from a table
-- ! In this example we will delete email_idx INDEX and create last_name_first_name_idx that do the same job of last_name_idx
DROP INDEX email_idx;

-- * Create an index for last_name and first_name (many-column)
CREATE INDEX first_name_last_name_idx
ON employees(first_name, last_name);