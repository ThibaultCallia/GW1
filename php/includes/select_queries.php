<?php

// ----- ADD PRODUCTS PAGE --------
// Brand options
$sql = "SELECT DISTINCT * FROM `brand` ORDER BY `brand`.`name` ASC";
$result = $mysqli->query($sql);

$brands = $result->fetch_all(MYSQLI_ASSOC);

// Category options
$sql = "SELECT DISTINCT * FROM `category` ORDER BY `category`.`id` ASC";
$result = $mysqli->query($sql);

$categories = $result->fetch_all(MYSQLI_ASSOC);

// Color options
$sql = "SELECT DISTINCT * FROM `color` ORDER BY `color`.`color_name` ASC";
$result = $mysqli->query($sql);

$colors = $result->fetch_all(MYSQLI_ASSOC);



// -------- ADMIN PAGE -------------
// get all product cards info
$sql = "SELECT p.id, p.name, p.description, p.image1, p.isSpotlight, p.isActive,
p.rating, p.price, b.name as brandName, cat.name as categoryName, 
GROUP_CONCAT(col.color_name) as colors 
FROM product p 
left JOIN brand b ON p.brand_id = b.id 
left JOIN category cat ON p.category_id = cat.id 
left JOIN product_has_color pc ON p.id = pc.product_id 
left JOIN color col ON pc.color_id = col.id 
WHERE isActive = 1 group by p.id;";
$result = $mysqli->query($sql);

$products = $result->fetch_all(MYSQLI_ASSOC);
