<?php
// db.php

// Database configuration
$host = 10.10.10.2;      // or the IP address of your database server
$username = spc ;     // your database username
$password = svetspc2020 ; // your database password
$database = spcjo ; // your database name

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Connection successful
echo "Connected successfully";

?>
