<?php
// if (isset($_POST['submit'])) {
//     //connect to your database
//     include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php');

//     $query = '';
//     foreach ($_POST['product_id'] as $index => $product_id) {
//         $checkbox_value = isset($POST['isActive' . $product_id]) ? 1 : 0;
//         $name = $_POST['name'][$index];
//         $query .= "UPDATE `product` SET `name` = '" . $name . "', `isActive` = b'" . $checkbox_value . "', `isSpotlight` = b'1', `price` = '89.00' WHERE `product`.`id` = " . $product_id . ";";
//     }
//     mysqli_multi_query($conn, $query);
//     if (mysqli_affected_rows($conn) > 0) {
//         echo 'checkboxes and product names updated successfully';
//     } else {
//         echo 'Error: ' . mysqli_error($conn);
//     }
// }
