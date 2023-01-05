<?php

include('./db.php');

// All active products query
$brandsQuery = 'SELECT 
DISTINCT b.id as brandId, b.name as brandName 
FROM 
product p
    LEFT JOIN 
      brand b ON p.brand_id = b.id
WHERE 
  p.isActive = 1 AND b.id is not NULL
ORDER BY 
  brandName;';

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
  echo  '<div class="subfilter__row">
        <input class="brand-checkbox" type="checkbox" id="b' . $brand['brandId'] . '" />
        <label for="b' . $brand['brandId'] . '">' . $brand['brandName'] . '</label>
        </div>';
}
