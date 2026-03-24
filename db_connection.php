<?php
$servername = "localhost";
$username = "root";   // Default for XAMPP/WAMP
$password = "";       // Default is empty
$dbname = "library_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Uncomment to test connection
?>