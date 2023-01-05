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
