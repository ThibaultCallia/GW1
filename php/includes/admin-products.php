<?php
include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.php');

// get all product cards info
$sql = "SELECT p.id as id, p.name as name, p.description as description, p.image1, p.isSpotlight as spotlight, p.isActive as active,
p.rating as rating, p.price as price, b.name as brandName, cat.name as categoryName, 
GROUP_CONCAT(col.color_name) as colors 
FROM product p 
left JOIN brand b ON p.brand_id = b.id 
left JOIN category cat ON p.category_id = cat.id 
left JOIN product_has_color pc ON p.id = pc.product_id 
left JOIN color col ON pc.color_id = col.id 
group by p.id;";
$result = $mysqli->query($sql);

$products = $result->fetch_all(MYSQLI_ASSOC);

$mysqli->close();

foreach ($products as $product) {
?>
    <section class="card-front">
        <div class="toggle">
            <input type="checkbox" <?= $product["active"] === "1" ? "checked" : "" ?> id="isActive" name="isActive" value="isActive">
            <label for="isActive">Active</label><br>
        </div>
        <img src="./../images/products/blabla.png" alt="RK84" />
        <div class="prodname"><?= $product["name"] ?></div>
        <div class="price-rat">
            <h4 class="price"><?= $product["price"] ?></h4>
            <div class="ratings">
                <?php
                for ($i = 1; $i <= 5; $i++) {
                    if ($product["rating"] === strval($i)) {
                        for ($y = 1; $y <= $i; $y++) {
                            echo '<i class="fas fa-star yellow"></i>';
                        }
                        for ($g = 5; $g > $i; $g--) {
                            echo '<i class="fas fa-star"></i>';
                        }
                        break;
                    }
                }
                ?>
            </div>
        </div>
        <div class="labels">
            <button class="label type"><?= $product["brandName"] ?></button>
            <button class="label brand"><?= $product["categoryName"] ?></button>
            <?php $colors = explode(",", $product["colors"]);
            foreach ($colors as $color) { ?>
                <button class="label color"><?= $color ?></button>
            <?php }
            ?>
        </div>
        <div class="description">
            <?= $product["description"] ?>
        </div>
    </section>
<?php } ?>