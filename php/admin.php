<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../CSS/add_product.css" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <title>Admin Page</title>
</head>

<body>
    <?php include './includes/nav.php'; ?>
    <main class="admin">
        <section class="welcome">
            <h1>Hallo <?= $_SESSION["username"] ?></h1>
            <a href="./add_products.php">Add products</a>
        </section>
        <section class="products">
            <div class="product-section-bar">
                <p>Products</p>
            </div>
            <div class="product-grid">
                <?php
                include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/admin-products.php');
                ?>
            </div>
        </section>
    </main>
</body>

</html>