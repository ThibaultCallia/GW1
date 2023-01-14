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

// ratings
$rating_id = 1;
for ($i = 1; $i <= 5; $i++) {
    if (isset($_POST["rating$i"])) {
        $rating_id = $i;
        break;
    } else {
        $rating_id = 1;
    }
}

// brand
// if new brand use new brand else use selected brand
if (!empty($_POST['newBrand'])) {
    $newBrand = $_POST["newBrand"];
    // insert newBrand into brand table
    $sql = "INSERT INTO `brand` (`id`, `name`)
            VALUES (NULL, '" . $newBrand . "');";
    $result = $mysqli->query($sql);
    // get id of newBrand
    $sql = "SELECT id FROM brand WHERE id = (SELECT MAX(id) FROM brand);";
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    $brand_id = $row["id"];
} else {
    $brand_id = $_POST['brands'];
}

// category
// if new cat use new cat else use selected cat
if (!empty($_POST['newCat'])) {
    $newCat = $_POST["newCat"];
    // insert newBrand into brand table
    $sql = "INSERT INTO `category` (`id`, `name`)
            VALUES (NULL, '" . $newCat . "');";
    $result = $mysqli->query($sql);
    // get id of newBrand
    $sql = "SELECT id FROM category WHERE id = (SELECT MAX(id) FROM category);";
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    $cat_id = $row["id"];
} else {
    $cat_id = $_POST['categories'];
}


// colors
// zie beneden


// -------- Insert new Product into DB - insert into product -------------
$sql = "INSERT INTO `product` (`id`, `brand_id`, `category_id`, `name`, `price`, `description`, `rating`, `isActive`, `isSpotlight`, `image1`, `image2`, `image3`, `image4`, `image5`, `date_added`) 
VALUES (NULL, '" . $brand_id . "', '" . $cat_id . "', '" . $name . "', '" . $price . "', '" . $desc . "', '" . $rating_id . "', b'" . $isActive . "', b'" . $inSpotlight . "', '.path/to/path', NULL, NULL, NULL, NULL, CURRENT_TIMESTAMP);";
$result = $mysqli->query($sql);


// ---------------- INSERT colors from new Product ------------
// Insert colors to newly added product
// insert into product_has_color

// get id of newest added product and name it product_id!
$sql = "SELECT id FROM product WHERE id = (SELECT MAX(id) FROM product);";
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
// --- not protected against SQL injection ---
// foreach ($newCols as $newCol) {
//     if (!empty($_POST["$newCol"])) {
//         $sql = "INSERT INTO `color` (`id`, `color_name`)
//             VALUES (NULL, '" . $_POST["$newCol"] . "');";
//         $result = $mysqli->query($sql);

//         // // get id from newCol
//         $sql = "SELECT * FROM color WHERE id = (SELECT MAX(id) FROM color);";
//         $result = $mysqli->query($sql);
//         $row = $result->fetch_assoc();
//         $newColId = $row["id"];

//         // // insert newCol into product has color
//         $sql = "INSERT INTO `product_has_color` (`product_id`, `color_id`) 
//             VALUES ('" . $product_id . "', '" . $newColId . "');";
//         $result = $mysqli->query($sql);
//     } else {
//         break;
//     }
// }

// --- ! safer for SQL-injection ! ---
foreach ($newCols as $newCol) {
    if (!empty($_POST["$newCol"])) {
        // insert newCol into color table
        $stmt = $mysqli->prepare("INSERT INTO `color` (`id`, `color_name`) VALUES (NULL, ?)");
        $stmt->bind_param("s", $_POST["$newCol"]);
        $stmt->execute();

        // get id of newCol
        $newColId = $stmt->insert_id;

        // insert newCol and product into product has color
        $stmt = $mysqli->prepare("INSERT INTO `product_has_color` (`product_id`, `color_id`) VALUES (?, ?)");
        $stmt->bind_param("ii", $product_id, $newColId);
        $stmt->execute();
    } else {
        break;
    }
}
