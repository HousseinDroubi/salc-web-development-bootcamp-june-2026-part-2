CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    hourly_pay DECIMAL(4,2),
    hire_date DATE
);

INSERT INTO users VALUES
(1,'Houssein','Droubi',12.3,'2026-10-20'),
(2,'Ibrahim','Kteish',20.5,'2026-08-20'),
(3,'Riva','Kteish',12,'2024-08-20'),
(4,'Mouhammad','Nasser',15,'2010-10-20'),
(5,'Ali','Charaf',15,'2026-10-20'),
(6,'Mouhammad','Elghoul',17,NULL);

-- Update table users, set hourly pay to 15 for id 3
UPDATE users
SET hourly_pay = 15
WHERE id = 3;

-- Update table users, set hire date '2026-05-01' for all users who have hire date is null
UPDATE users
SET hire_date = '2026-05-01'
WHERE hire_date IS NULL;

-- Update table users, set hire date '2012-10-20' and hourly_pay to 17 for id = 4
UPDATE users
SET hire_date = '2012-10-20', hourly_pay = 17.00
WHERE id = 4;

-- Update table users, set hire date to null where id = 2
UPDATE users
SET hire_date = NULL
WHERE id = 2;

-- Update table users, set hire date to null for all users
UPDATE users
SET hire_date = NULL;