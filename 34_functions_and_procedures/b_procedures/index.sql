CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    hourly_pay DECIMAL(4,2)
);

INSERT INTO users(name, hourly_pay) VALUES
('Hassan', 14.5),
('Hady', 17.5);

CREATE OR REPLACE PROCEDURE give_raise(
    IN user_id INT,
    IN raise_amount DECIMAL)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Step 1: Perform the database update
    UPDATE users 
    SET hourly_pay = hourly_pay + raise_amount 
    WHERE id = user_id;
    
    -- Step 2: Save the changes permanently (Procedures can do this!)
    COMMIT;
END;
$$;

-- Call them separately
CALL give_raise(1,3.0);
SELECT * FROM users;


-- Procedure with output
CREATE OR REPLACE PROCEDURE give_raise_with_output(
    IN user_id INT, 
    IN raise_amount DECIMAL,
    OUT new_hourly_pay DECIMAL
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE users 
    SET hourly_pay = hourly_pay + raise_amount 
    WHERE id = user_id
    RETURNING hourly_pay INTO new_hourly_pay;
    
    COMMIT;
END;
$$;

CALL give_raise_with_output(1,3, NULL);

-- How to drop a procedure:
DROP PROCEDURE IF EXISTS give_raise(INT, DECIMAL)