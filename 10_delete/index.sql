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

-- delete all users that have hire date is null
DELETE FROM users
WHERE hire_date IS NULL;

-- delete user with id = 5
DELETE FROM users
WHERE id = 5;

-- delete all users
DELETE FROM users;