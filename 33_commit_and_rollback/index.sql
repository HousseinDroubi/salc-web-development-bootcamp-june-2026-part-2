CREATE DATABASE learn_sql_db;

CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    name TEXT,
    balance DECIMAL(5,2),
    create_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT check_balance CHECK (balance > 0)
);

INSERT INTO accounts(name, balance) VALUES
('Houssein',200),
('Ali',400);


CREATE OR REPLACE PROCEDURE transfer_money(
    IN sender_id INT, 
    IN receiver_id INT, 
    IN amount DECIMAL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Step 1: Take money from sender
    UPDATE accounts 
    SET balance = balance - amount 
    WHERE id = sender_id;

    -- Step 2: Give money to receiver
    UPDATE accounts 
    SET balance = balance + amount 
    WHERE id = receiver_id;

    -- If we reach here with no errors, save everything permanently!
    COMMIT;

-----------------------------------------------------------------
-- WHAT HAPPENS WHEN AN ERROR OCCURS:
-----------------------------------------------------------------
EXCEPTION WHEN OTHERS THEN
    -- An error happened! (e.g., Sender balance went negative)
    -- PostgreSQL catches it and jumps straight down here.
    
    ROLLBACK; -- Undo Step 1 so Alice gets her money back!
    
    RAISE NOTICE 'Something went wrong! Transaction canceled.';
END;
$$;

CALL transfer_money(1, 2, 250.00); -- This will raise an error
SELECT * from accounts;