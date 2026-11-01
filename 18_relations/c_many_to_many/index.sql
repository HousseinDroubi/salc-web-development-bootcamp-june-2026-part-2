CREATE DATABASE learn_sql_db;

-- 1) Create table students
CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INT
);

-- 2) Create table courses
CREATE TABLE courses(
    id SERIAL PRIMARY KEY,
    code TEXT,
    name TEXT
);

-- 3) Create table students_registration
CREATE TABLE students_registration(
    id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(student_id) REFERENCES students(id),
    FOREIGN KEY(course_id) REFERENCES courses(id)
);

-- 4) Start counting for courses.id, students.id and students_registration.id from 1001
ALTER SEQUENCE students_id_seq RESTART WITH 1001;
ALTER SEQUENCE courses_id_seq RESTART WITH 1001;
ALTER SEQUENCE students_registration_id_seq RESTART WITH 1001;

-- 5) Add data for table courses
INSERT INTO courses (code, name) VALUES
('CSCI200','Computer Skills'),
('CSCI250','Java'),
('CSCI250L','Java Lab');

-- 6) Add data for table students
INSERT INTO students(first_name, last_name, age) VALUES
('houssein','droubi', 17),
('ali','charaf', 17);

-- 7) Add data for table students_registration
INSERT INTO students_registration(student_id, course_id) VALUES
(1001, 1002),
(1001, 1003),
(1002, 1001);

-- A very very important note:
-- Try to delete students where id = 1001
DELETE FROM students WHERE id = 1001; -- This will throw an error. Why? because, there is a row inside students_registration that is related to it.
-- What is the solution?

    -- Solution 1: Delete the related rows first
    DELETE FROM students_registration WHERE student_id = 1001; 
    DELETE FROM students WHERE id = 1001; 

    -- Solution 2: Using on delete cascade and on delete set null. Will be explained later
