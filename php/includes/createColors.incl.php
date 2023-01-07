<?php

include($_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.php');

// All active products query
$colorsQuery = 'SELECT 
DISTINCT c.id as colorId, c.color_name as colorName 
FROM 
product p
    INNER JOIN 
      product_has_color pc ON p.id = pc.product_id
    INNER JOIN 
      color c ON pc.color_id = c.id
WHERE 
  p.isActive = 1 
ORDER BY 
  colorName;';

// Query output into variable
$result = $mysqli->query($colorsQuery);

// Creating array with active colors
$colors = [];
if ($result && $result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $colors[] = $row;
  }
}

// Closing sql connection
$mysqli->close();


// CREATING SUBFILTER COLORS SECTION

foreach ($colors as $color) {
  echo  '<div class="subfilter__row">
        <input class="color-checkbox" type="checkbox" id="c' . $color['colorId'] . '" />
        <label for="c' . $color['colorId'] . '">' . $color['colorName'] . '</label>
        </div>';
}
