CREATE DATABASE customQuery;
use customQuery;
CREATE TABLE student(
	id INT PRIMARY KEY,
    student_name VARCHAR(45)
);

CREATE TABLE employee(
	id INT PRIMARY KEY,
    employee_name VARCHAR(45),
    salary FLOAT
);

CREATE TABLE products(
	id INT PRIMARY KEY,
    product_name VARCHAR(45),
    price FLOAT
);

CREATE TABLE songs(
	id INT PRIMARY KEY,
    song_name VARCHAR(45),
    song_length FLOAT
);

SELECT * FROM student;
SELECT * FROM employee;
SELECT * FROM products;
SELECT * FROM songs;

insert into student
values
	(1, "student1");

insert into products (product_name,price,id)
values
	("goodProduct",200,1);

insert into employee
values
	(1, "employee1", 25000.23);

INSERT INTO products (id,product_name,price) VALUES (3,"Third Product",300)


