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
    <title>Admin Page</title>
</head>

<body>
    <nav class="main">
        <ul>
            <li><a href="./../index.html">Keykaps</a></li>
            <div class="rechts">
                <li><a href="./admin.php">Admin Page</a></li>
                <li><a href="./logout.php">Log Out</a></li>
            </div>
        </ul>
    </nav>
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
                ...
            </div>
        </section>
    </main>
</body>

</html>