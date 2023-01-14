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
    <link rel="stylesheet" href="../public/admin.css">
    <script src="../public/admin.js" defer></script>

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap" rel="stylesheet">
    <title>Admin Page</title>
</head>

<body>
    <?php include './includes/nav.inc.php'; ?>
    <main class="admin">
        <section class="welcome">
            <h1>Hallo <?= $_SESSION["username"] ?>.</h1>
            <div class="btns">
                <a href="#prds">View products</a>
                <a href="./add_products.php">Add products</a>
            </div>
        </section>
        <section class="products" id="prds">
            <div class="product-section-bar">
                <p>Products</p>
            </div>
            <div class="product-sections">
                <?php
                include './includes/admin-products.inc.php';
                ?>
            </div>
        </section>
    </main>
</body>

</html>