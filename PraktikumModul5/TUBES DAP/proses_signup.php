<?php
include 'FinKoneksi.php';

$nama = $_POST['nama'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm = $_POST['confirm_password'];

if ($password !== $confirm) {
    header("Location: profile.html?status=password_tidak_sama");
    exit;
}

$cek = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($cek);

if ($result->num_rows > 0) {
    header("Location: profile.html?status=email_sudah_ada");
    exit;
}

$password_hash = password_hash($password, PASSWORD_DEFAULT);

$query = "INSERT INTO users (nama, email, password) 
          VALUES ('$nama', '$email', '$password_hash')";

if ($conn->query($query)) {
    header("Location: masuk.html?status=sukses");
} else {
    header("Location: profile.html?status=gagal");
}

exit;
?>