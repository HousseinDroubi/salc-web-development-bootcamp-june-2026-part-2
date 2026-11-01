-- UNION
-- UNION combines the records of multiple search queries
-- Note, when using UNION, the columns must be the same data type
-- Note, when using UNION, it ignores duplicate values, get also the duplicate records, we use UNION ALL
CREATE DATABASE learn_sql_db;

CREATE TABLE income (
    income_name TEXT,
    amount DECIMAL (10,2)
);

INSERT INTO income (income_name, amount)
VALUES
('orders',1000000.00),
('merchandise',50000.00),
('services',125000.00);

CREATE TABLE expenses (
    expenses_name TEXT,
    amount DECIMAL (10,2)
);

INSERT INTO expenses (expenses_name, amount)
VALUES
('wages',250000.00),
('tax',50000.00),
('services',125000.00);

--1) Combine search for all incomes and all expenses (remove duplicate)
SELECT * FROM expenses
UNION
SELECT * FROM income;

--2) Combine search for all incomes and all expenses
SELECT * FROM expenses
UNION ALL
SELECT * FROM income;