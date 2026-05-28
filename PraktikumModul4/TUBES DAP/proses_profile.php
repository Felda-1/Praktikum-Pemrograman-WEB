<?php
session_start();
include 'FinKoneksi.php';

$user_id = $_SESSION['user_id'];

$nama_usaha = $_POST['nama_usaha'];
$jenis_usaha = $_POST['jenis_usaha'];
$tentang = $_POST['tentang'];

// cek sudah ada profile atau belum
$cek = "SELECT * FROM profiles WHERE user_id='$user_id'";
$result = $conn->query($cek);

if ($result->num_rows > 0) {
    $query = "UPDATE profiles SET
              nama_usaha='$nama_usaha',
              jenis_usaha='$jenis_usaha',
              tentang='$tentang'
              WHERE user_id='$user_id'";
} else {
    $query = "INSERT INTO profiles (user_id, nama_usaha, jenis_usaha, tentang)
              VALUES ('$user_id','$nama_usaha','$jenis_usaha','$tentang')";
}

$conn->query($query);

header("Location: profile2.php");
?>