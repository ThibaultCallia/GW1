<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("Location: ./login.php");
    exit;
}

?>

<h1>Hallo <?= $_SESSION["username"] ?></h1>
<a href="./logout.php">Uitloggen</a>