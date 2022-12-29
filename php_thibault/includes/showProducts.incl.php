<?php

// Creating DB variables
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = 'root';
$db_db = 'keykaps';
$db_port = 8889;

// Starting DB connection with variables
$mysqli = new mysqli(
  $db_host,
  $db_user,
  $db_password,
  $db_db,
  $db_port
);

// Testing connection
if ($mysqli->connect_error) {
  echo 'Errno: ' . $mysqli->connect_errno;
  echo '<br>';
  echo 'Error: ' . $mysqli->connect_error;
  exit();
}

// Show active products query
$showProductsQuery = 'SELECT 
p.id, p.name, p.description, image1, image2, image3, image4, image5, isSpotlight, price, b.name as brandName, cat.name as categoryName, GROUP_CONCAT(col.color_name) as colors
FROM
product p
      left JOIN
brand b ON p.brand_id = b.id
      left JOIN 
category cat ON p.category_id = cat.id
	  left JOIN
product_has_color pc ON p.id = pc.product_id
	  left JOIN 
color col ON pc.color_id = col.id
WHERE 
  isActive = 1
group by 
  p.id';
$result = $mysqli->query($showProductsQuery);

// Creating array with active products
$products = [];
if ($result && $result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

// Closing sql connection
$mysqli->close();

echo '<pre>';
var_dump($products);
echo '</pre>';


foreach ($products as $product) {
  $imgList = [];
  for ($i = 1; $i < 6; $i++) {
    if ($product['image' . $i]) {
      $imgList[] = $product['image' . $i];
    }
  }
  $cardBg = '<div class="card-bg"></div>';
  $discount = '<div class="discount">%</div>';
  $rating = '<div class="ratings">
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-half.svg.svg" alt="" />
    <img src="./images/icons/star-empty.svg.svg" alt="" />
  </div>';
  $description = '<p class="product-description">' . $product['description'] . '</p>';
  if ($product['colors']) {
    $productColors = explode(',', $product['colors']);
  } else {
    $productColors = [];
  }
  $productColorsDiv = "";
  if (count($productColors) > 0) {
    foreach ($productColors as $productColor) {
      $productColorsDiv = $productColorsDiv . '<button class="label color">' . $productColor . '</button>';
    }
  }
  $labels = '<div class="labels">
    <button class="label type">' . $product['categoryName'] . '</button>
    <button class="label brand">' . $product['brandName'] . '</button>'
    . $productColorsDiv . '
  </div>';
  $priceCard = '<div class="price_cart">
  <p class="price">$' . $product['price'] . '</p>
  <figure class="cart">
    <img
      src="./images/icons/shopping-cart.svg.svg"
      alt="shopping cart icon"
    />
  </figure>
</div>';
  $firstImageDiv = '<img
    class="product-img"
    src="./images/' . $imgList[0] . '"
    alt="Image of a ' . $product['name'] . '"
  />';
  $optionalImagesDiv = '';
  for ($i = 1; $i < count($imgList); $i++) {
    $optionalImagesDiv = $optionalImagesDiv . '<img
    class="product-img"
    src="./images/' . $imgList[$i] . '"
    alt="Image of a ' . $product['name'] . '"
  />';
  }

  $productName = '<h3 class="product-name">' . $product['name'] . '</h3>';
  $priceIcon = '<div class="product-price_icon">
    <p class="price">$' . $product['price'] . '</p>
    <figure class="icons">
      <img src="./images/icons/heart.svg.svg" alt="heart icon" />
      <img
        src="./images/icons/shopping-cart.svg.svg"
        alt="shopping cart icon"
      />
    </figure>
  </div>';

  echo "<div class = 'product-card " . $product['brandName'] . "'>";
  echo $cardBg;
  echo $discount;
  echo '<section class="card-back">';
  echo $rating;
  echo $description;
  echo $labels;
  echo $priceCard;
  echo '</section>';
  echo '<section class="card-front">';
  echo $firstImageDiv;
  echo $optionalImagesDiv;
  echo $productName;
  echo $priceIcon;

  echo '</section>';
  echo "</div>";
}

// echo '<img src="./images/nuphy1.jpg" alt="">';





date_default_timezone_set("Europe/Brussels");



// Looping through products array -> creating DIVs per product
