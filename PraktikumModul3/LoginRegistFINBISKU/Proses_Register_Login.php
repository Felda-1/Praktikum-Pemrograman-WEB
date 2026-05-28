<?php
session_start();

// tempat simpan user
if (!isset($_SESSION['users'])) {
    $_SESSION['users'] = [];
}

$action = $_POST['action'];

if ($action == "register") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // validasi sederhana
    if (empty($username) || empty($password)) {
        echo "Data tidak boleh kosong!";
        exit;
    }

    $_SESSION['users'][$username] = $password;

    echo "Registrasi berhasil! <a href='Login.php'>Login</a>";
}

elseif ($action == "login") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($_SESSION['users'][$username]) &&
        $_SESSION['users'][$username] == $password) {

        $_SESSION['login'] = true;
        $_SESSION['username'] = $username;

        header("Location: Dashboard.php");
        exit;

    } else {
        echo "Login gagal! Username atau password salah.";
    }
}
?>
