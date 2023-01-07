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
