<?php

include('includes/db.php');

// All active products query
$brandsQuery = 'SELECT 
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

// Query output into variable
$result = $mysqli->query($brandsQuery);

// Creating array with active products
$brands = [];
if ($result && $result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $brands[] = $row;
  }
}

// Closing sql connection
$mysqli->close();

// CREATING SUBFILTER BRANDS SECTION
foreach ($brands as $brand) {
}
