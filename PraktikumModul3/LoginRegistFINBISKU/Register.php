<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>

<h2>Register</h2>

<form action="Proses_Register_Login.php" method="POST">
    <input type="hidden" name="action" value="register">

    <label>Username:</label><br>
    <input type="text" name="username"><br><br>

    <label>Password:</label><br>
    <input type="password" name="password"><br><br>

    <button type="submit">Daftar</button>
</form>

<p>Sudah punya akun? <a href="Login.php">Login</a></p>

</body>
</html>