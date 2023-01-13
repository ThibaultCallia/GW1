<?php
// echo '<pre>';
// var_dump(isset($_POST['submit']));
// var_dump($_POST['product_id']);
// exit;

include './includes/db.inc.php';

if (isset($_POST["submit"])) {
    echo "submitted!";
}


$sql = 'USE keykaps;';
foreach ($_POST['product_id'] as $index => $product_id) {
    $isActive = isset($POST['isActive' . $product_id]) ? 1 : 0;
    $name = $_POST['name'][$index];
    $sql .= "UPDATE `product` SET `name` = '" . $name . "', `isActive` = b'" . $isActive . "', `isSpotlight` = b'1', `price` = '89.00' WHERE `product`.`id` = " . $product_id . ";";
}

echo '<pre>';
var_dump($sql);
// exit;
$mysqli->multi_query($sql);
// exit;

if (mysqli_affected_rows($mysqli) > 0) {
    echo 'checkboxes and product names updated successfully';
} else {
    echo 'Error: ' . mysqli_error($mysqli);
}

$mysqli->close();
