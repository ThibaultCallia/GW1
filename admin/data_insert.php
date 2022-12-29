<?php
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

// category
if (isset($_POST['categories'])) {
    switch ($_POST['categories']) {
        case "Keyboard":
            $cat = 1;
            break;
        case "Keycaps":
            $cat = 2;
            break;
        case "Switches":
            $cat = 3;
            break;
    }
}
// colors
if (isset($_POST['inSpotlight'])) {
    $inSpotlight = 1;
} else {
    $inSpotlight = 0;
}

// $sql = "INSERT INTO product(task) VALUES ('" . $_POST["newtask"] . "')";
$sql = "INSERT INTO `product` (`id`, `brand_id`, `category_id`, `name`, `description`, `price`, `isActive`, `isSpotlight`, `image1`, `image2`, `image3`, `image4`, `image5`) 
    VALUES (NULL, '2', '" . $cat . "', '" . $name . "', '" . $desc . "', '" . $price . "', b'" . $isActive . "', b'" . $inSpotlight . "', './path/to/path.php', NULL, NULL, NULL, NULL);";

$result = $mysqli->query($sql);
