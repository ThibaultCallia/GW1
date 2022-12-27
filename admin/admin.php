<?php
session_start();

// ik check of dat sessionlogin bestaat en of die op TRUE staat
// if (!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
//     header("Location: ./../login.php");
//     exit;
// }

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>Hallo <?= $_SESSION["username"] ?></h1>
    <a href="./logout.php">Uitloggen</a>
</body>

</html>