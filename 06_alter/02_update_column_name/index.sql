-- The following will rename the existing column 'hourly_page' to 'hourly_pay' and change/set its data type to DECIMAL(5,2)

-- Step 1: Rename the column first
ALTER TABLE employees 
    RENAME COLUMN hourly_page TO hourly_pay;

-- Step 2: Change its data type using the new name
ALTER TABLE employees 
    ALTER COLUMN hourly_pay TYPE DECIMAL(5,2);