-- AUTO_INCREMENT is a keyword that is used to automatically add the id by 1 on last id value

CREATE DATABASE learn_sql_db;

-- Here we have one to many relation. One user can have multiple transactions

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT
);


CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount DECIMAL(4,2),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL -- here, if any user delete any related row will set to null
);

INSERT INTO users(username) VALUES
('houssein'),
('Ali');

INSERT INTO transactions(amount,user_id) VALUES
(10,1),
(20,1),
(30,1),
(40,2);

-- try to delete a user data, this will set the user_id column in all their transactions to NULL
DELETE FROM users WHERE id = 1;