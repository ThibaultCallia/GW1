<?php

$cats = ['Keyboard', 'Keycaps', 'Switches'];


foreach ($cats as $cat) {
    include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php');


    // get all product cards info
    $sql = "SELECT p.id as id, p.name as name, p.description as description, p.image1, 
p.isSpotlight as spotlight, p.isActive as active, p.rating as rating, p.price as price, 
b.name as brandName, cat.name as categoryName, GROUP_CONCAT(col.color_name) as colors 
FROM product p left JOIN brand b ON p.brand_id = b.id left JOIN category cat ON p.category_id = cat.id 
left JOIN product_has_color pc ON p.id = pc.product_id left JOIN color col ON pc.color_id = col.id 
WHERE cat.name = '" . $cat . "' GROUP BY p.id ORDER BY p.isActive DESC, p.id DESC;";
    $result = $mysqli->query($sql);

    // echo "<pre>";
    // var_dump($cats);
    // exit;

    $products = $result->fetch_all(MYSQLI_ASSOC);

    // if (isset($_POST["submit"])) {
    //     echo "submitted!";
    //     include './update-products.inc.php';
    //     // var_dump($_POST);
    // }

    $mysqli->close();
?>

    <!-- <form action="#" method="post"> -->
    <form action="<?php $_SERVER['DOCUMENT_ROOT'] ?>/php/includes/update-products.inc.php" method="post">
        <button name="submit" type="submit">Save</button>
        <h2><?= $cat ?></h2>
        <table class="<?= $cat ?> hidden">
            <thead>
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
                foreach ($products as $product) {
                ?>
                    <tr class="row">
                        <td>
                            <div class="toggle">
                                <input type="checkbox" <?= $product["active"] === "1" ? "checked" : "" ?> id="isActive" name="isActive" value="isActive">
                                <label for="isActive"></label><br>
                            </div>
                        </td>
                        <input type="hidden" name="product_id[]" value="<?= $product["id"] ?>">
                        <td><?= $product["id"] ?></td>
                        <td onclick="makeEditable(this)"><input type="text" name="name[]" value="<?= $product['name'] ?>" class="editable name" readonly></td>
                        <td onclick="makeEditable(this)">€ <input type="number" name="price[]" value="<?= $product['price'] ?>" class="editable price" readonly></td>
                        <td><button class="label brand"><?= $product["brandName"] ?></button></td>
                        <td>
                            <div class="colors">
                                <?php $colors = explode(",", $product["colors"]);
                                foreach ($colors as $color) { ?>
                                    <button class="label color"><?= $color ?></button>
                                <?php }
                                ?>
                            </div>
                        </td>
                        <td>
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
                        </td>
                        <td>
                            <div class="toggle">
                                <input type="checkbox" <?= $product["spotlight"] === "1" ? "checked" : "" ?> id="inSpotlight" name="inSpotlight" value="inSpotlight">
                                <label for="inSpotlight"></label><br>
                            </div>
                        </td>
                        <td><?= substr($product["description"], 0, 10) . "..." ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </form>
<?php } ?>