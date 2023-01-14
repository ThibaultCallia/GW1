<?php


include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php');

// All active products query

$whereStatement = $loggedIn ? "" : "WHERE isActive = 1 ";


$showProductsQuery = 'SELECT 
p.id, p.name, p.description, p.discount, p.image1, p.image2, p.image3, p.image4, p.image5, p.isActive, p.isSpotlight, p.price, p.rating, b.id as brandId, b.name as brandName, cat.name as categoryName, GROUP_CONCAT(col.id) as colorIds, GROUP_CONCAT(col.color_name) as colors
FROM
product p
      left JOIN
brand b ON p.brand_id = b.id
      left JOIN 
category cat ON p.category_id = cat.id
	    left JOIN
product_has_color pc ON p.id = pc.product_id
	    left JOIN 
color col ON pc.color_id = col.id ' .
  $whereStatement
  . 'group by 
  p.id
order by 
  p.id DESC';

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
  // PRODUCT NAME-----------------------------------
  $productName = $product['name'];

  // CATEGORY NAME-----------------------------------
  $dataCategory = $product['categoryName'];
  // COLORS-----------------------------------------
  if ($product['colorIds']) {
    $productColorsArray = explode(',', $product['colorIds']);
    foreach ($productColorsArray as &$value) {
      $value = 'c' . strval($value);
    };
    unset($value);

    $dataColor = join(",", $productColorsArray);
  } else {
    $dataColor = "";
  }
  // BRAND
  $dataBrandId = 'b' . $product['brandId'];
  $brandName = $product['brandName'];

  // PRICE
  $dataPrice = strval($product['price']);
  // ORDER
  $dataOrder = $product['id'];

  // IMAGES FIGURE DIV
  $imgList = [];
  for ($i = 1; $i <= 5; $i++) {
    if ($product['image' . $i]) {
      $imgList[] = $product['image' . $i];
    }
  }
  $imgDiv = '<div class="swiperD swiper"><div class="swiper-wrapper">';
  foreach ($imgList as $img) {
    $imgDiv .= '<div class="swiper-slide"><img src="./images/products/' . strtolower($dataCategory) . '/' . $img . '" alt="An image of the ' . $product['name'] . '" /></div>';
  }
  $imgDiv .= '</div></div>';

  $imgDivModal = '<div class="swiperM swiper"><div class="swiper-wrapper">';
  foreach ($imgList as $img) {
    $imgDivModal .= '<div class="swiper-slide"><img src="./images/products/' . strtolower($dataCategory) . '/' . $img . '" alt="An image of the ' . $product['name'] . '" /></div>';
  }
  $imgDivModal .= '</div><div class="swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
  <div class="swiper-button-next"><i class="fa-solid fa-chevron-right"></i></div></div>';




  $longDescription = $product['description'];
  $shortDescription = substr($longDescription, 0, 20) . '...';

  // DESCRIPTION DIV -------------------------------
  $ratingsDivFront = '<div class="ratings">';
  $stars = '';
  for ($i = 0; $i < $product['rating']; $i++) {
    $stars = $stars . '<i class="fas fa-star yellow"></i>';
  }
  for ($i = 0; $i < 5 - $product['rating']; $i++) {
    $stars = $stars . '<i class="fas fa-star"></i>';
  }
  $ratingsDivFront = $ratingsDivFront . $stars . '</div>';
  $descriptionDiv =
    '<div class="description">
      <div class="prod-name">
        <span><i class="fa-solid fa-tags"></i>
        ' . strtoupper($brandName) . '
        </span>
        <h3 class="name">' . $productName . '</h3>
      </div>
      ' . $ratingsDivFront . '
      <h4 class="price">€' . $dataPrice . '</h4>
      <div class="desc">
      ' . $shortDescription . '
      </div>
    </div>
  ';

  $spotlight = $product['isSpotlight'] == 1 ? 'spotlight' : '';

  $cardFront = '<section class="card-front ' . $spotlight . '">' . $imgDiv . $descriptionDiv . '</section>';


  $productModal =
    '<dialog class="product-modal">
      <div class="product-details">
        <i class="close fa-solid fa-xmark"></i>
        ' . $imgDivModal . '
        <div class="text">
          <div class="product">
            <h3 class="name">' . $productName . '</h3>
            <span class="title brand">' . strtoupper($brandName) . '</span>
          </div>
          <div class="price-container">
            <div class="price-wrapper wrap">
                <span class="title">PRICE</span>
                <h4 class="price">€' . $dataPrice . '</h4>
            </div>
            <div class="amount-wrapper wrap">
              
              
            </div>
          </div>
          <div class="description">
            <span class="title">DESCRIPTION</span>
            <p class="description">
                ' . $longDescription . '
            </p>
          </div>
          <div class="ratings">
            <span class="title">RATINGS</span>
            <figure>
                ' . $stars . '
            </figure>
          </div>
          
            
            
          
        </div>
      </div>
    </dialog>';

  $dataActive = $loggedIn ? 'data-active="' . $product['isActive'] . '"' : '';

  $activeClass = '';
  if ($loggedIn && $product['isActive'] === "1") {
    $activeClass = 'active';
  }

  $productCard = '<div class="product-card ' . $activeClass . '" data-category="' . $dataCategory . '" data-color="' . $dataColor . '" data-brand="' . $dataBrandId . '" data-price="' . $dataPrice . '" data-order="' . $dataOrder . '" ' . $dataActive . '>' . $cardFront . $productModal . '</div>';

  echo $productCard;
}
