<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

include './db.php';
include './select_queries.php';

// voeg nieuw product toe als productnaam bestaat
if (isset($_POST["prodname"])) {
    include './insert_queries.php';
    // var_dump($_POST);
}


$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../CSS/add_product.css" />
    <link rel="stylesheet" href="./../CSS/select.css" />
    <script src="./add-products.js" type="module"></script>
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
                            <?php foreach ($brands as $brand) { ?>
                                <option value="<?= $brand["id"] ?>"><?= $brand["name"] ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="select_input select_input-category">
                        <label for="category-select">Category</label>
                        <select name="categories" id="category-select">
                            <?php foreach ($categories as $category) { ?>
                                <option value="<?= $category["id"] ?>"><?= $category["name"] ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="colors">
                        <?php foreach ($colors as $color) { ?>
                            <button type="button">
                                <label for="color-<?= $color["color_name"] ?>"><?= $color["color_name"] ?></label>
                            </button>
                            <!-- style="display:none" -->
                            <input type="checkbox" value="<?= $color["id"] ?>" id="color-<?= $color["color_name"] ?>">
                        <?php } ?>

                    </div>
                </div>
            </div>
            <!-- The image section 1-->
            <div class="img-wrap wrapper">
                <h2>Images</h2>
                <div class="images wrap2"> <label for="img1">Image 1:</label><br>
                    <input type="file" id="img1" name="img1" accept="img/*" required>
                </div>
                <div id="optional-imgs" style="display: none;">
                    <div id="img-container-2" style="display: none;">
                        <input type="file" id="img2" name="img2" accept="img/*">
                    </div>
                    <button class="add-img" id="add-img2" onclick="document.getElementById('img-container-2').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                    <div id="img-container-3" style="display: none;">
                        <input type="file" id="img3" name="img3" accept="img/*">
                    </div>
                    <button class="add-img" id="add-img3" onclick="document.getElementById('img-container-3').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                    <div id="img-container-4" style="display: none;">
                        <input type="file" id="img4" name="img4" accept="img/*">
                    </div>
                    <button class="add-img" id="add-img4" onclick="document.getElementById('img-container-4').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                    <div id="img-container-5" style="display: none;">
                        <input type="file" id="img5" name="img5" accept="img/*">
                    </div>
                    <button class="add-img" id="add-img5" onclick="document.getElementById('img-container-5').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                </div>
                <button type="button" id="add-image-button" onclick="document.getElementById('optional-imgs').style.display = 'block'; this.style.display = 'none';">Add Image</button>
            </div>
            <!-- Image section 2 / with JS -->
            <div class="img-wrap wrapper">
                <div class="images wrap2" id="required-img">
                    <label for="img1">Image 1:</label><br>
                    <input type="file" id="img1" name="img1" accept="img/*" required>
                </div>
                <div id="optional-imgs">
                    <div id="img-container-2" style="display: none;">
                        <input type="file" id="img2" name="img2" accept="img/*">
                    </div>
                    <div id="img-container-3" style="display: none;">
                        <input type="file" id="img3" name="img3" accept="img/*">
                    </div>
                    <div id="img-container-4" style="display: none;">
                        <input type="file" id="img4" name="img4" accept="img/*">
                    </div>
                    <div id="img-container-5" style="display: none;">
                        <input type="file" id="img5" name="img5" accept="img/*">
                    </div>
                </div>
                <button type="button" id="add-image-button" onclick="addOptionalImage();">Add Image</button>
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
<script>
    function addOptionalImage() {
        const optionalImgs = document.querySelectorAll('#optional-imgs > div');
        const numImgs = optionalImgs.length;
        if (numImgs < 5) {
            const imgContainer = document.querySelector('#img-container-' + (numImgs + 1));
            imgContainer.style.display = 'block';
        }
        if (numImgs == 4) {
            document.querySelector('#add-image-button').style.display = 'none';
        }
    }
</script>