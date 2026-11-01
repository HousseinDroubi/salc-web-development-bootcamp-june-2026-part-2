-- DEFAULT is a keyword used to auto fill the attribute of a certain column with a specific value
CREATE DATABASE learn_sql_db;

CREATE TABLE products(
    id INT PRIMARY KEY,
    product_name TEXT UNIQUE NOT NULL,
    price DECIMAL(5,2) DEFAULT 0
);

INSERT INTO products(id, product_name) VALUES
(1, 'p1'); -- Now price is 0 due to DEFAULT 0
