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

-- GET all users (* means all columns)
SELECT *
FROM users;

-- GET first name of all users
SELECT first_name
FROM users;

-- GET first name and last name of all users
SELECT first_name, last_name
FROM users;

-- Get data of user with id 1
SELECT *
FROM users
WHERE id = 1;

-- GET first name of user with id 1
SELECT first_name
FROM users
WHERE id = 1;

-- GET first name and last name of user with id 1
SELECT first_name, last_name
FROM users
WHERE id = 1;

-- Get all columns of users who have id greater than 3
SELECT *
FROM users
WHERE id > 3;

-- Get first name and last name of users who have id greater than 3
SELECT first_name, last_name
FROM users
WHERE id > 3;

-- Get all columns for all users who have first name is 'Mouhammad'
SELECT *
FROM users
WHERE first_name = 'Mouhammad';

-- Get all columns for all users who don't have first name is 'Mouhammad'
SELECT *
FROM users
WHERE first_name != 'Mouhammad';

-- Get id and hourly pay for all users who have hourly pay greater than 15
SELECT id, hourly_pay
FROM users
WHERE hourly_pay > 15;

-- Get id for all users that have been hired before year 2026
SELECT id
FROM users
WHERE hire_date < '2026-01-01';

-- Get id for all users that have hire data NULL
-- We use IS with NULL (not =)
SELECT id
FROM users
WHERE hire_date IS NULL;

-- Get id for all users that have hire data not NULL
SELECT id
FROM users
WHERE hire_date IS NOT NULL; -- (don't use !=)

-- Get id, first name and last name for all users that have first name is 'Mouhammad' and hourly pay > 16
SELECT id, first_name, last_name
FROM users
WHERE first_name = 'Mouhammad' AND hourly_pay > 16.00;

-- Get id, first name and last name for all users that have been hired between 2024-01-01 and 2026-01-01
SELECT id, first_name, last_name
FROM users
WHERE hire_date BETWEEN '2024-01-01' AND '2026-01-01';