-- NOT NULL when creating a table used to prevent assigning a value as NULL for a column
CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name TEXt,
    last_name TEXt,
    email TEXt UNIQUE NOT NULL
);

-- The following query will throw an error if executed
-- INSERT INTO users VALUES (
--     1, 'Houssein', 'Droubi', NULL
-- );