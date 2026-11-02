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


CREATE OR REPLACE PROCEDURE transfer_moeny(
    p_sender_id INT,
    p_receiver_id INT,
    p_amount DECIMAL(5,2)
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_sender_balance DECIMAL(5,2);
BEGIN
    -- Step 1: Lock and check the sender's balance
    SELECT balance INTO v_sender_balance 
    FROM accounts 
    WHERE id = p_sender_id;

    -- Check if sender exists
    IF NOT FOUND THEN
        RAISE NOTICE 'Error: Sender account ID % not found. Rolling back.', p_sender_id;
        ROLLBACK;
        RETURN;
    END IF;

    -- Check if sender has enough balance (accounting for the check constraint > 0)
    IF v_sender_balance < p_amount THEN
        RAISE NOTICE 'Error: Insufficient funds. Sender balance is %, but attempted to transfer %. Rolling back.', v_sender_balance, p_amount;
        ROLLBACK;
        RETURN;
    END IF;

    -- Step 2: Deduct amount from sender
    UPDATE accounts 
    SET balance = balance - p_amount 
    WHERE id = p_sender_id;

    -- Step 3: Add amount to receiver
    UPDATE accounts 
    SET balance = balance + p_amount 
    WHERE id = p_receiver_id;

    -- Step 4: Finalize the transaction
    COMMIT;
    RAISE NOTICE 'Success: Transferred % from account % to account %.', p_amount, p_sender_id, p_receiver_id;

END;
$$;

CALL transfer_money(1, 2, 50.00); -- This will work fine
CALL transfer_money(1, 2, 250.00); -- This will throw an error
SELECT * from accounts;