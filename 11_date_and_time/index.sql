CREATE DATABASE learn_sql_db;

-- The following types:
    -- DATE: yyyy-mm-dd
    -- TIME: hh:mm:ss
    -- TIMESTAMP: yyyy-mm-dd hh:mm:ss

CREATE TABLE schedule(
    id INT PRIMARY KEY,
    my_date DATE,
    my_time TIME,
    my_date_time TIMESTAMP 
);
-- Insert one row
INSERT INTO schedule VALUES
(1,'2026-05-01','14:30:00','2025-01-01 11:00:00');

-- Insert current date, current time and current date and time
INSERT INTO schedule VALUES
(2, CURRENT_DATE, CURRENT_TIME, NOW());