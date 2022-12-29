<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

include './db.php';

// voeg nieuw product toe als productnaam bestaat
if (isset($_POST["prodname"])) {
    include './data_insert.php';
    // var_dump($_POST);
}

// $sql = "SELECT * FROM product";
// $result = $mysqli->query($sql);

// $todos = $result->fetch_all(MYSQLI_ASSOC);

$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../CSS/add_product.css" />
    <title>New Products</title>
</head>

<body>
    <div class="form-container">
        <form method="post" action="#">
            <!-- The title section -->
            <div class="title-wrap wrapper">
                <h1>Add product</h1>
                <div class="toggles wrap2">
                    <div class="toggle-active toggle">
                        <span>Active</span>
                        <input type="checkbox" checked id="isActive" name="isActive" value="isActive">
                        <label for="isActive">Active </label><br>
                    </div>
                    <div class="toggle-spotlight toggle">
                        <span>In spotlight </span>
                        <input type="checkbox" id="inSpotlight" name="inSpotlight" value="inSpotlight">
                        <label for="inSpotlight">Spotlight</label><br>
                    </div>
                </div>

            </div>
            <!-- The product section -->
            <div class="product-wrap wrapper">
                <h2>Product</h2>
                <div class="product-input wrap2">
                    <div class="form_input form_input-prodname">
                        <input type="text" name="prodname" id="prodname" required />
                        <span></span>
                        <label for="prodname">Product Name</label>
                    </div>
                    <div class="form_input form_input-price">
                        <input type="number" id="price" name="price" min="0" max="9999.99" step="0.01" required>
                        <span></span>
                        <label for="price">Price</label>
                    </div>
                    <div class="form_input form_input-description">
                        <input type="text" name="description" id="description" required />
                        <span></span>
                        <label for="description">Description</label>
                    </div>
                </div>
            </div>
            <!-- The filter section -->
            <div class="filter-wrap wrapper">
                <h2>Filters</h2>
                <div class="filter-input wrap2">
                    <div class="select_input select_input-brand">
                        <label for="brand-select">Brand</label>
                        <select name="brands" id="brand-select">
                            <option value="">--Please choose an option--</option>
                            <option value="brand1">brand1</option>
                        </select>
                    </div>
                    <div class="select_input select_input-category">
                        <label for="category-select">Category</label>
                        <select name="categories" id="category-select">
                            <option value="">--Please choose an option--</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Keycaps">Keycaps</option>
                            <option value="Switches">Switches</option>
                        </select>
                    </div>
                    <div class="colors">
                        <button type="button">
                            <label for="color-black">black</label>
                        </button>
                        <input type="checkbox" id="color-black" style="display: none;">
                        <button type="button">
                            <label for="color-blue">blue</label>
                        </button>
                        <input type="checkbox" id="color-blue" style="display: none;">
                        <button type="button">
                            <label for="color-gold">gold</label>
                        </button>
                        <input type="checkbox" id="color-gold" style="display: none;">
                        <button type="button">
                            <label for="color-green">green</label>
                        </button>
                        <input type="checkbox" id="color-green" style="display: none;">
                        <button type="button">
                            <label for="color-grey">grey</label>
                        </button>
                        <input type="checkbox" id="color-grey" style="display: none;">
                        <button type="button">
                            <label for="color-orange">orange</label>
                        </button>
                        <input type="checkbox" id="color-orange" style="display: none;">
                        <button type="button">
                            <label for="color-pink">pink</label>
                        </button>
                        <input type="checkbox" id="color-pink" style="display: none;">
                        <button type="button">
                            <label for="color-purple">purple</label>
                        </button>
                        <input type="checkbox" id="color-purple" style="display: none;">
                        <button type="button">
                            <label for="color-red">red</label>
                        </button>
                        <input type="checkbox" id="color-red" style="display: none;">
                        <button type="button">
                            <label for="color-silver">silver</label>
                        </button>
                        <input type="checkbox" id="color-silver" style="display: none;">
                        <button type="button">
                            <label for="color-white">white</label>
                        </button>
                        <input type="checkbox" id="color-white" style="display: none;">
                        <button type="button">
                            <label for="color-yellow">yellow</label>
                        </button>
                        <input type="checkbox" id="color-yellow" style="display: none;">
                    </div>
                </div>
            </div>
            <!-- The image section -->
            <div class="img-wrap wrapper">
                <h2>Images</h2>
                <div class="images wrap2">
                    <div>
                        <label for="img1">Image 1:</label><br>
                        <input type="file" id="img1" name="img1" accept="img/*" required>
                    </div>
                    <!-- The optional image input fields are initially hidden -> JS -->
                    <div id="optional-imgs" style="display: none;">
                        <div>
                            <input type="file" id="img2" name="img2" accept="img/*">
                        </div>
                        <div>
                            <input type="file" id="img3" name="img3" accept="img/*">
                        </div>
                        <div>
                            <input type="file" id="img4" name="img4" accept="img/*">
                        </div>
                        <div>
                            <input type="file" id="img5" name="img5" accept="img/*">
                        </div>
                    </div>
                    <!-- The "Add Image" button -->
                    <button class="add-img" id="add-img2">Add Image</button>
                    <button class="add-img" id="add-img3">Add Image</button>
                    <button class="add-img" id="add-img4">Add Image</button>
                    <button class="add-img" id="add-img5">Add Image</button>
                </div>

            </div>
            <!-- Add product button -->
            <div class="submit-btn">
                <input type="submit" value="Add Product">
            </div>

        </form>
    </div>
</body>

</html>