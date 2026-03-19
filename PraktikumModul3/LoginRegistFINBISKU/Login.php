<?php
session_start();

// kalau sudah login, langsung ke dashboard
if (isset($_SESSION['login'])) {
    header("Location: Dashboard.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

<h2>Login</h2>

<form action="Proses_Register_Login.php" method="POST">
    <input type="hidden" name="action" value="login">

    <label>Username:</label><br>
    <input type="text" name="username"><br><br>

    <label>Password:</label><br>
    <input type="password" name="password"><br><br>

    <button type="submit">Login</button>
</form>

<p>Belum punya akun? <a href="Register.php">Daftar</a></p>

</body>
</html>