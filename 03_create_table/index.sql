CREATE TABLE users(
    id INT, -- INT means integer
    first_name TEXT, -- TEXT used for texts
    last_name TEXT,
    age INT,
    hourly_page DECIMAL(5,2), -- DECIMAL provides exact precision for financial or rate values, avoiding float rounding errors
    hired_date DATE -- DATE used for dates
);