DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER,
    units_available INTEGER,
	PRIMARY KEY (id)
	);
    
	INSERT INTO products (product_name, department_name, price, units_available)
    VALUES ("bowl", "kitchen", 2, 17), ("pen", "office", 4, 32), ("computer", "office", 40, 21),
			("fork", "kitchen", 5, 15), ("desk", "office", 55, 5),
			("spoon", "kitchen", 8, 78), ("paper", "office", 9, 52), ("envelope", "office", 2.50, 32),
            ("plate", "kitchen", 1.50, 43), ("mixer", "kitchen", 35, 3);
    
    USE bamazon_db;
    
    SELECT * FROM products;
    
    
