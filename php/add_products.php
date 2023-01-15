<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./includes/login.php");
    exit;
}

include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php');
include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/select_queries.inc.php');

// voeg nieuw product toe als productnaam bestaat
if (isset($_POST["prodname"])) {
    include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/insert_queries.inc.php');;
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <script src="https://kit.fontawesome.com/cdb38844a4.js" crossorigin="anonymous"></script>
    <script src="../public/addProducts.js" defer></script>
    <link rel="stylesheet" href="../public/addProducts.css">
    <title>New Products</title>
</head>

<body>
    <?php include './includes/nav.inc.php'; ?>
    <div class="form-container">
        <form method="post" action="#" enctype="multipart/form-data">
            <!-- The title section -->
            <div class="title-wrap wrapper">
                <h1>New product</h1>
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
                        <textarea rows="6" placeholder="Description..." name="description" id="description" required /></textarea>
                        <p class="char-container">
                        <div class="label"><span id="char-count">0</span> / 500</div>
                        </p>
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
                            <option value="0">- Add new brand -</option>
                        </select>
                        <input type="text" class="newBrand hidden" name="newBrand" placeholder="New brand">
                    </div>
                    <div class="select_input select_input-category">
                        <label for="category-select">Category</label>
                        <select name="categories" id="category-select">
                            <?php foreach ($categories as $category) { ?>
                                <option value="<?= $category["id"] ?>"><?= $category["name"] ?></option>
                            <?php } ?>
                            <option value="0">- Add new category -</option>
                        </select>
                        <input type="text" class="newCat hidden" name="newCat" placeholder="New category">
                    </div>
                    <div class="ratings">
                        <span class="title">Ratings</span>
                        <figure>
                            <input type="radio" id="star1" name="rating1" value="1" /><label for="star1"><i id="s1" class="fas fa-star"></i></label>
                            <input type="radio" id="star2" name="rating2" value="2" /><label for="star2"><i id="s2" class="fas fa-star"></i></label>
                            <input type="radio" id="star3" name="rating3" value="3" /><label for="star3"><i id="s3" class="fas fa-star"></i></label>
                            <input type="radio" id="star4" name="rating4" value="4" /><label for="star4"><i id="s4" class="fas fa-star"></i></label>
                            <input type="radio" id="star5" name="rating5" value="5" /><label for="star5"><i id="s5" class="fas fa-star"></i></label>
                        </figure>
                    </div>
                    <div class="colors">
                        <?php foreach ($colors as $color) { ?>
                            <button type="button">
                                <label for="<?= $color["color_name"] ?>"><?= $color["color_name"] ?></label>
                            </button>
                            <input type="checkbox" value="<?= $color["id"] ?>" id='<?= $color["color_name"] ?>' name='<?= $color["color_name"] ?>'>
                        <?php } ?>
                        <input type="text" class="hidden" id="newCol1" name="newCol1">
                        <input type="text" class="hidden" id="newCol2" name="newCol2">
                        <input type="text" class="hidden" id="newCol3" name="newCol3">
                        <button id="newCol" type="button" class="addNewCol">
                            <label for="newCol">Add new color</label>
                        </button>
                    </div>
                </div>
            </div>
            <!-- The image section 1-->
            <div class="img-wrap wrapper">
                <h2>Images</h2>
                <div class="images wrap2">
                    <label id="img-container-1">
                        <input type="file" id="img1" name="img1" required>
                    </label>
                    <label id="img-container-2" style="display: none;">
                        <input type="file" id="img2" name="img2">
                    </label>
                    <button class="add-img" id="add-img2" onclick="document.getElementById('img-container-2').style.display = 'block'; document.getElementById('add-img3').style.display = 'inline-block';this.style.display = 'none';">Add Image</button>
                    <label id="img-container-3" style="display: none;">
                        <input type="file" id="img3" name="img3">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img3" onclick="document.getElementById('img-container-3').style.display = 'block';document.getElementById('add-img4').style.display = 'inline-block'; this.style.display = 'none';">Add Image</button>
                    <label id="img-container-4" style="display: none;">
                        <input type="file" id="img4" name="img4">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img4" onclick="document.getElementById('img-container-4').style.display = 'block';document.getElementById('add-img5').style.display = 'inline-block'; this.style.display = 'none';">Add Image</button>
                    <label id="img-container-5" style="display: none;">
                        <input type="file" id="img5" name="img5">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img5" onclick="document.getElementById('img-container-5').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                </div>
            </div>
            <!-- Add product button -->
            <div class="submit-btn">
                <input type="submit" value="Add Product">
            </div>
        </form>
    </div>

    <div class="submit-pop-up hidden" id="popup">
        <img src="../images/tick.png" alt="check icon">
        <h2>About to submit</h2>
        <p>Are you sure?</p>
        <button class="popUpBtn" type="button"><a href="#">Submit</a></button>
        <button class="popUpBtn" type="button"><a href="./admin.php">Cancel</a></button>
    </div>



</body>

</html>