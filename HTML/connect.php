<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$message = $_POST['message'];

$conn = new mysqli('localhost', 'root', '', 'newform');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
   
    $stmt = $conn->prepare("INSERT INTO registration (name, email, phone, gender, message) VALUES (?, ?, ?, ?, ?)");
    
    $stmt->bind_param("sssss", $name, $email, $phone, $gender, $message);
    
   
    if ($stmt->execute()) {
        echo "✅ Registration Successful!";
    } else {
        echo "❌ Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>