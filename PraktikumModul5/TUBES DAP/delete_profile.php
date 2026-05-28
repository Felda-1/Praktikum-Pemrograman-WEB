<?php
session_start();
include 'FinKoneksi.php';

$user_id = $_SESSION['user_id'];

// hapus data profile
$query = "DELETE FROM profiles WHERE user_id='$user_id'";
$conn->query($query);

// balik ke profile
header("Location: profile2.php");
?>