<?php

require('includes/db.php');
// include('includes/db.php');??


// All active products query
$showProductsQuery = 'SELECT 
p.id, p.name, p.description, p.discount, p.image1, p.image2, p.image3, p.image4, p.image5, p.isSpotlight, p.price, b.name as brandName, cat.name as categoryName, GROUP_CONCAT(col.color_name) as colors
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

// echo '<pre>';
// var_dump($products);
// echo '</pre>';


// CREATING PRODUCT CARD DIV FOR EACH PRODUCT IN QUERY RESULT
foreach ($products as $product) {

  // div class = card-bg--------------------------
  $cardBg = '<div class="card-bg"></div>';

  // div class = discount ------------------------
  $discount = "";
  if ($product['discount']) {
    $discount = '<div class="discount">' . $product['discount'] * 100 . '%</div>';
  }

  // div class = ratings ------------------------
  $rating = '<div class="ratings">
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-full.svg.svg" alt="" />
    <img src="./images/icons/star-half.svg.svg" alt="" />
    <img src="./images/icons/star-empty.svg.svg" alt="" />
  </div>';

  // div class = product-description ------------
  $description = '<p class="product-description">' . $product['description'] . '</p>';

  // div class = label---------------------------
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

  // div class = price_cart---------------------
  $priceCard = '<div class="price_cart">
  <p class="price">$' . $product['price'] . '</p>
  <figure class="cart">
    <img
      src="./images/icons/shopping-cart.svg.svg"
      alt="shopping cart icon"
    />
  </figure>
</div>';

  // product images----------------------------
  $imgList = [];
  for ($i = 1; $i <= 5; $i++) {
    if ($product['image' . $i]) {
      $imgList[] = $product['image' . $i];
    }
  }
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

  // Product name ----------------------------
  $productName = '<h3 class="product-name">' . $product['name'] . '</h3>';

  // Product price----------------------------
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


  // Creation of product card div-------------
  echo "<div class = 'product-card " . $product['categoryName'] . "'>";
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






// Looping through products array -> creating DIVs per product
