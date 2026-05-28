<?php
session_start();
include 'FinKoneksi.php';

$email = $_POST['email'];
$password = $_POST['password'];

// ambil data user berdasarkan email
$query = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($query);
$data = $result->fetch_assoc();

// cek login
if ($data && password_verify($password, $data['password'])) {

    // simpan session
    $_SESSION['user_id'] = $data['id'];
    $_SESSION['nama'] = $data['nama'];

    // redirect ke profile
    header("Location: profile2.php");
    exit;

} else {
    echo "Email atau password salah!";
}
?>