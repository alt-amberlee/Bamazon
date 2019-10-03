DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pineapple", "food department", 999.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "food department", 899.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("heels", "shoe department", 999.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("diamond bracelet", "jewelry department", 999.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("huda beauty", "makeup department", 699.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sequin dress", "apparel department", 899.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("body butter creme", "skincare department", 799.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hair curler", "accessory department", 599.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("facial mask", "skincare department", 499.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cuticle oil serum", "nail department", 899.99, 17);








