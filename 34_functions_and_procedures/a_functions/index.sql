CREATE DATABASE learn_sql_db;

-- Use stand alone functions
CREATE OR REPLACE FUNCTION calculate_annual_salary(IN monthly_pay DECIMAL)
RETURNS DECIMAL AS $$
BEGIN
    -- Just math / calculation
    RETURN monthly_pay * 12;
END;
$$ LANGUAGE plpgsql;

SELECT calculate_annual_salary(700);

-- Use functions with query from a table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    monthly_salary DECIMAL(5,2)
);

INSERT INTO users(name, monthly_salary) VALUES
('Hassan', 900),
('Hady', 950),
('Mouhammad', 780);

SELECT *, calculate_annual_salary(monthly_salary) AS "annual_salary"
from users;

-- Return set of rows from a functions
CREATE OR REPLACE FUNCTION get_high_earners(min_monthly_salary DECIMAL)
RETURNS SETOF users AS $$
BEGIN
    RETURN QUERY 
    SELECT * 
    FROM users 
    WHERE monthly_salary >= min_monthly_salary;
END;
$$ LANGUAGE plpgsql;


SELECT * FROM get_high_earners(700);

-- How to drop a function
DROP FUNCTION IF EXISTS calculate_annual_salary(DECIMAL);