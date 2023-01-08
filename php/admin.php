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
            <div class="product-sections">
                <table id="KB" border="1" width="100%" celspacing="0">
                    <thead>
                        <tr>
                            <th colspan="9">Keyboards</th>
                        </tr>
                        <tr>
                            <th>Active</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Colors</th>
                            <th>Rating</th>
                            <th>Spotlight</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/admin-products.php');
                        ?>
                    </tbody>
                </table>

                <table id="KC" border="1" width="100%" celspacing="0">
                    <thead>
                        <h2 for="KC">Keycaps</h2>
                        <tr>
                            <th>Active</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Colors</th>
                            <th>Rating</th>
                            <th>Spotlight</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/admin-products.php');
                        ?>
                    </tbody>
                </table>

                <table id="SW" border="1" width="100%" celspacing="0">
                    <thead>
                        <h2 for="SW">Switches</h2>
                        <tr>
                            <th>Active</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Colors</th>
                            <th>Rating</th>
                            <th>Spotlight</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/admin-products.php');
                        ?>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</body>

</html>