<?php

// errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$sql = '';
foreach ($_POST['product_id'] as $index => $product_id) {
    $isActive = isset($_POST['isActive' . $product_id]) ? 1 : 0;
    $name = $_POST['name'][$index];
    $price = $_POST['price'][$index];
    $inSpotlight = isset($_POST['inSpotlight' . $product_id]) ? 1 : 0;
    $sql .= "UPDATE `product` SET `name` = '" . $name . "', `isActive` = b'" . $isActive . "', `isSpotlight` = b'" . $inSpotlight . "', `price` = '" . $price . "' WHERE `product`.`id` = " . $product_id . ";";
}

$mysqli->multi_query($sql);
