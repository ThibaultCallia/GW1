<?php
// rechtsreeks naar auth.php
// dit is ok, maar als je een lege submit doet, gaat die wel door
if (!isset($_POST["username"], $_POST["password"])) {
  header("Location: ./login.php?error=1");
  exit;
}

// dit is goed, checkt of het empty is..
// if (empty($_POST["username"]) || empty($_POST["password"])) {
//   header("Location: ./login.php?error=2");
//   exit;
// }

$username = $_POST["username"];
$password = $_POST["password"];

// is het de juiste login?
require("./db.php");
// db closed?

$sql = "SELECT username, password
  FROM user 
  WHERE username = '" . strtolower($username) . "' 
  AND password= MD5('" . $password . "')
  LIMIT 1";
var_dump($sql);
// vardump ----------------

$result = $mysqli->query($sql);
if ($result && $result->num_rows > 0) {
  // Ja, het is de juiste
  $user = $result->fetch_assoc();

  session_start();
  session_regenerate_id();
  $_SESSION["loggedin"] = TRUE;
  $_SESSION["username"] = $username;
  // Adhv deze session variables kunnen we wel elke soort user al dan niet checken op admin toegang
  $_SESSION["id"] = $user["id"];
  $_SESSION["firstname"] = $user["firstname"];

  header("Location: ./../admin.php");
  exit;
}

// Nee, login was fout
header("Location: ./login.php?error=2");
exit;
