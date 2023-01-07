<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.php');
include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/select.php');

$mysqli->close();
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
                <section class="card-front">
                    <div class="toggle-active toggle">
                        <input type="checkbox" checked id="isActive" name="isActive" value="isActive">
                        <label for="isActive">Active </label><br>
                    </div>
                    <img src="./../images/products/blabla.png" alt="RK84" />
                    <div class="prodname">Nuphy 2</div>
                    <div class="price-rat">
                        <h4 class="price">€199</h4>
                        <div class="ratings">
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="labels">
                        <button class="label type">Keyboard</button>
                        <button class="label brand">Nuphy</button>
                        <button class="label color">black</button>
                        <button class="label color">orange</button>
                        <button class="label color">white</button>
                    </div>
                    <div class="description">
                        Dolorem, illum, dignissimos officia nostrum nam nobis vel
                        ipsam pariatur?
                        natus eligendi fugit laboriosam veritatis, deserunt maiores
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </div>
                </section>
                <section class="card-front">
                    <div class="toggle-active toggle">
                        <input type="checkbox" checked id="isActive" name="isActive" value="isActive">
                        <label for="isActive">Active </label><br>
                    </div>
                    <img src="./../images/products/blabla.png" alt="RK84" />
                    <div class="prodname">Royal KLuge RK84</div>
                    <div class="price-rat">
                        <h4 class="price">€99</h4>
                        <div class="ratings">
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="labels">
                        <button class="label type">Keyboard</button>
                        <button class="label brand">Royal Kludge</button>
                        <button class="label color">white</button>
                        <button class="label color">grey</button>
                        <button class="label color">RGB</button>
                    </div>
                    <div class="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dolorem, illum, dignissimos officia nostrum nam nobis vel
                        natus eligendi fugit laboriosam veritatis, deserunt maiores
                        ipsam pariatur?
                    </div>
                </section>
            </div>
        </section>
    </main>
</body>

</html>