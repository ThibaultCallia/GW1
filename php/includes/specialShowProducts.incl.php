<?php

class Products
{

    public $listOfProducts;

    public function __construct()
    {
        // Creating DB variables
        $db_host = '127.0.0.1';
        $db_user = 'root';
        $db_password = 'root';
        $db_db = 'keykaps_test';
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
        $showProductsQuery = "SELECT * FROM product WHERE isActive = 1";
        $result = $mysqli->query($showProductsQuery);

        // Creating array with active products
        $this->listOfProducts = [];
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $this->listOfProducts[] = $row;
            }
        }

        // Closing sql connection
        $mysqli->close();
    }

    public function allProducts()
    {
        foreach ($this->listOfProducts as $product) {
            echo "<div class = 'grid__element'>";
            echo $product["name"];
            echo "</div>";
        }
    }

    public function spotlightProducts()
    {
        
    }
}

date_default_timezone_set("Europe/Brussels");



// Looping through products array -> creating DIVs per product
