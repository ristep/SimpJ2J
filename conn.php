<?php
$servername = "localhost";
$username = "laplaptest";
$password = "TEhGpXxpGumWcreg";
$dbname = "laplaptest";

try {
  $conn = new PDO("mysql:host=$servername;charset=utf8mb4;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

return $conn;
