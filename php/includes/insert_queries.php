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
// if new brand use new brand else use selected brand
if (isset($_POST['newBrand'])) {
    $newBrand = $_POST["newBrand"];
    // insert newBrand into brand table
    $sql = "INSERT INTO `brand` (`id`, `name`)
            VALUES (NULL, '" . $newBrand . "');";
    $result = $mysqli->query($sql);
    // get id of newBrand
    $sql = "SELECT * FROM brand WHERE id = (SELECT MAX(id) FROM brand);";
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    $brand_id = $row["id"];
} else {
    $brand_id = $_POST['brands'];
}

// category
// if new cat use new cat else use selected cat
if (isset($_POST['newCat'])) {
    $newCat = $_POST["newCat"];
    // insert newBrand into brand table
    $sql = "INSERT INTO `category` (`id`, `name`)
            VALUES (NULL, '" . $newCat . "');";
    $result = $mysqli->query($sql);
    // get id of newBrand
    $sql = "SELECT * FROM category WHERE id = (SELECT MAX(id) FROM category);";
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    $cat_id = $row["id"];
} else {
    $cat_id = $_POST['categories'];
}


// colors
// zie beneden


// -------- Insert new Product into DB - insert into product -------------
$sql = "INSERT INTO `product` (`id`, `brand_id`, `category_id`, `name`, `price`, `discount`, `description`, `isActive`, `isSpotlight`, `image1`, `image2`, `image3`, `image4`, `image5`, `date_added`) 
VALUES (NULL, '" . $brand_id . "', '" . $cat_id . "', '" . $name . "', '" . $price . "', '0.1', '" . $desc . "', b'" . $isActive . "', b'" . $inSpotlight . "', '.path/to/path', NULL, NULL, NULL, NULL, NULL);";
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

// -------- If new Colors exist, insert them into color table -------------
$newCols = ['newCol1', 'newCol2', 'newCol3'];
foreach ($newCols as $newCol) {
    if (isset($_POST[$newCol])) {
        $sql = "INSERT INTO `color` (`id`, `color_name`)
                VALUES (NULL, '" . ${$newCol} . "');";
        $result = $mysqli->query($sql);

        // get id from newCol
        $sql = "SELECT * FROM color WHERE id = (SELECT MAX(id) FROM color);";
        $result = $mysqli->query($sql);
        $row = $result->fetch_assoc();
        $newColId = $row["id"];

        // insert newCol into product has color
        $sql = "INSERT INTO `product_has_color` (`product_id`, `color_id`) 
                VALUES ('" . $product_id . "', '" . $newColId . "');";
        $result = $mysqli->query($sql);
    } else {
        break;
    }
}
