-- The following will add a new column called 'phone_number' with data type of TEXT
-- In case there were existing data (rows) in the table, the actual data for the new column will be filled as 'NULL'
ALTER TABLE employees
ADD COLUMN phone_number TEXT;