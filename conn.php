<?php
// this vars shoud be changed as needed 
$servername = "localhost";       // MySQL server adress
$username = "FastFoodDemo";        // user for connecting to database
$password = "58rvFWadkmbw18Up";  // password
$dbname = "FastFoodDemo";          // database name

try {
	$conn = new PDO("mysql:host=$servername;charset=utf8mb4;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}

return $conn;
