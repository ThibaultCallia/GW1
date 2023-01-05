<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

include './includes/db.php';
include './includes/select_queries.php';

// voeg nieuw product toe als productnaam bestaat
if (isset($_POST["prodname"])) {
    include './includes/insert_queries.php';
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
    <link rel="stylesheet" href="./../CSS/add_product.css" />
    <link rel="stylesheet" href="./../CSS/select.css" />
    <script src="./add-products.js" type="module"></script>
    <title>New Products</title>
</head>

<body>
    <?php include './includes/nav.php'; ?>
    <div class="form-container">
        <?php if (isset($_SESSION['message'])) : ?>
            <div class="message">
                <?= $_SESSION['message']; ?>
            </div>
        <?php endif; ?>
        <form method="post" action="#">
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
                        <div class="label"><span id="char-count">0</span> / 500 ch</div>
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
                        </select>
                        <button class="add add-brand">
                            <span class="material-symbols-outlined">add_circle</span>
                        </button>
                    </div>
                    <div class="select_input select_input-category">
                        <label for="category-select">Category</label>
                        <select name="categories" id="category-select">
                            <?php foreach ($categories as $category) { ?>
                                <option value="<?= $category["id"] ?>"><?= $category["name"] ?></option>
                            <?php } ?>
                        </select>
                        <button class="add add-cat">
                            <span class="material-symbols-outlined">add_circle</span>
                        </button>
                    </div>
                    <div class="colors">
                        <?php foreach ($colors as $color) { ?>
                            <button type="button">
                                <label for="<?= $color["color_name"] ?>"><?= $color["color_name"] ?></label>
                            </button>
                            <!-- style="display:none" -->
                            <input type="checkbox" value="<?= $color["id"] ?>" id='<?= $color["color_name"] ?>' name='<?= $color["color_name"] ?>'>
                        <?php } ?>
                        <button class="add add-col">
                            <span class="add material-symbols-outlined">add_circle</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- The image section 1-->
            <div class="img-wrap wrapper">
                <h2>Images</h2>
                <div class="images wrap2">
                    <label id="img-container-1">
                        <input type="file" id="img1" name="img1" accept="img/*" required>
                    </label>
                    <label id="img-container-2" style="display: none;">
                        <input type="file" id="img2" name="img2" accept="img/*">
                    </label>
                    <button class="add-img" id="add-img2" onclick="document.getElementById('img-container-2').style.display = 'block'; document.getElementById('add-img3').style.display = 'inline-block';this.style.display = 'none';">Add Image</button>
                    <label id="img-container-3" style="display: none;">
                        <input type="file" id="img3" name="img3" accept="img/*">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img3" onclick="document.getElementById('img-container-3').style.display = 'block';document.getElementById('add-img4').style.display = 'inline-block'; this.style.display = 'none';">Add Image</button>
                    <label id="img-container-4" style="display: none;">
                        <input type="file" id="img4" name="img4" accept="img/*">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img4" onclick="document.getElementById('img-container-4').style.display = 'block';document.getElementById('add-img5').style.display = 'inline-block'; this.style.display = 'none';">Add Image</button>
                    <label id="img-container-5" style="display: none;">
                        <input type="file" id="img5" name="img5" accept="img/*">
                    </label>
                    <button style="display: none;" class="add-img" id="add-img5" onclick="document.getElementById('img-container-5').style.display = 'block'; this.style.display = 'none';">Add Image</button>
                </div>
            </div>
            <!-- Add product button -->
            <div class="submit-btn">
                <input type="submit" value="Add Product">
            </div>
    </div>

    </form>
    <?php unset($_SESSION['message']); ?>
    <dialog class="popup">
        <img src="./../images/admin/tick.png" alt="tick icon">
        <h2>Submitted</h2>
        <p>Your product has been added to the database. Would you like to add another product?</p>
        <div class="btns">
            <button type="button">YES</button>
            <button type="button">NO</button>
        </div>
    </dialog>
    </div>
</body>

</html>
<script>
    // For color buttons to stay clicked
    function toggleClickedClass(event) {
        event.target.classList.toggle("clicked");
    }
    const buttons = document.querySelectorAll(".filter-wrap .colors button label");
    buttons.forEach((button) =>
        button.addEventListener("click", toggleClickedClass)
    );

    // char count
    const textarea = document.querySelector('#description');
    const charCount = document.querySelector('#char-count');

    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
    });
    // char count limit
    const charLimit = 50;

    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
        if (textarea.value.length > charLimit) {
            textarea.value = textarea.value.substring(0, charLimit);
            charCount.textContent = charLimit;
            charCount.style.color = "red";
        } else {
            charCount.style.color = "black";
        }
    });
</script>