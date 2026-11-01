-- Unique is a keyword used to prevent duplicate entires for a certain column
-- Unique doesn't prevent a value to be null for multiple rows for sepecific column
CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE
);

INSERT INTO users VALUES (
    1, 'Houssein', 'Droubi','housseindroubi@example.com'
);

-- The following will throw an error if executed
-- INSERT INTO users VALUES (
--     2, 'Ali', 'Charaf','housseindroubi@example.com'
-- );