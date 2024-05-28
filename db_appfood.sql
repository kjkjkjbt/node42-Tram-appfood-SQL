CREATE DATABASE restaurant_db;
USE restaurant_db;

-- Create table 'user'
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Create table 'restaurant'
CREATE TABLE restaurant (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    res_name VARCHAR(255),
    image VARCHAR(255),
    `desc` VARCHAR(255)
);

-- Create table 'food_type'
CREATE TABLE food_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(255)
);

-- Create table 'food'
CREATE TABLE food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(255),
    image VARCHAR(255),
    price FLOAT,
    `desc` VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

-- Create table 'sub_food'
CREATE TABLE sub_food (
    sub_id INT AUTO_INCREMENT PRIMARY KEY,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

-- Create table 'order'
CREATE TABLE `order` (
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    PRIMARY KEY (user_id, food_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

-- Create table 'like_res'
CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Create table 'rate_res'
CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);


-- Question 1. Find 5 users who have liked the most  restaurants:

SELECT 
    user.user_id, 
    user.full_name, 
    COUNT(like_res.res_id) AS like_count
FROM 
    user
JOIN 
    like_res ON user.user_id = like_res.user_id
GROUP BY 
    user.user_id, user.full_name
ORDER BY 
    like_count DESC
LIMIT 5;


-- 2. Find the 2 restaurants with the most likes:

SELECT 
    restaurant.res_id, 
    restaurant.res_name, 
    COUNT(like_res.user_id) AS like_count
FROM 
    restaurant
JOIN 
    like_res ON restaurant.res_id = like_res.res_id
GROUP BY 
    restaurant.res_id, restaurant.res_name
ORDER BY 
    like_count DESC
LIMIT 2;

-- 3. Find the user who has placed the most orders:


SELECT 
    user.user_id, 
    user.full_name, 
    COUNT(order.food_id) AS order_count
FROM 
    user
JOIN 
    `order` ON user.user_id = `order`.user_id
GROUP BY 
    user.user_id, user.full_name
ORDER BY 
    order_count DESC
LIMIT 1;

-- 4. Find users who are inactive in the system (no orders, no likes, no ratings):


SELECT 
    user.user_id, 
    user.full_name
FROM 
    user
LEFT JOIN 
    `order` ON user.user_id = `order`.user_id
LEFT JOIN 
    like_res ON user.user_id = like_res.user_id
LEFT JOIN 
    rate_res ON user.user_id = rate_res.user_id
WHERE 
    `order`.user_id IS NULL 
    AND like_res.user_id IS NULL 
    AND rate_res.user_id IS NULL;

