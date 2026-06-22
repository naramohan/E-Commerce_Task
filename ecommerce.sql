CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    description TEXT
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO products(name,price,description)
VALUES
('Laptop',50000,'Dell Laptop'),
('Smartphone',20000,'Android Smartphone'),
('Headphones',2000,'Wireless Headphones'),
('Keyboard',1500,'Mechanical Keyboard');
