<?php
// --------------Variabelen--------------
// product details
$name = $_POST["prodname"];
$desc = $_POST["description"];
$price = $_POST["price"];

// toggles
if (isset($_POST['isActive'])) {
    $isActive = 1;
} else {
    $isActive = 0;
}
if (isset($_POST['inSpotlight'])) {
    $inSpotlight = 1;
} else {
    $inSpotlight = 0;
}

// brand
$brand = $_POST['brands'];
// category
$cat = $_POST['categories'];

// colors
// zie beneden


// -------- Insert new Product into DB - insert into product -------------
$sql = "INSERT INTO `product` (`id`, `brand_id`, `category_id`, `name`, `price`, `discount`, `description`, `isActive`, `isSpotlight`, `image1`, `image2`, `image3`, `image4`, `image5`, `date_added`) 
VALUES (NULL, '" . $brand . "', '" . $cat . "', '" . $name . "', '" . $price . "', '0.1', '" . $desc . "', b'" . $isActive . "', b'" . $inSpotlight . "', '.path/to/path', NULL, NULL, NULL, NULL, NULL);";
$result = $mysqli->query($sql);


// ---------------- INSERT colors from new Product ------------
// Insert colors to newly added product
// insert into product_has_color

// get id of newest added product and name it product_id!
$sql = "SELECT * FROM product WHERE id = (SELECT MAX(id) FROM product);";
$result = $mysqli->query($sql);
$row = $result->fetch_assoc();
$product_id = $row["id"];
// for every color of allColors
// check if checkbox is checked
// if so do query
foreach ($colors as $color) {
    if (isset($_POST[$color["color_name"]])) {
        $sql = "INSERT INTO `product_has_color` (`product_id`, `color_id`) 
            VALUES ('" . $product_id . "', '" . $color["id"] . "');";
        $result = $mysqli->query($sql);
    }
}
