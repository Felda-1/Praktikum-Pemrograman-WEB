<?php
session_start();
include 'koneksi.php';

if (isset($_POST['login'])) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $password = $_POST['password'];

    if (!$email || empty($password)) {
        $error = "Email atau password tidak valid!";
    } else {
        $query = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
        $user = mysqli_fetch_assoc($query);

        if ($user && $user['password'] == $password) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['nama'] = $user['nama'];
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Email atau password salah!";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Login - SmartFlood</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

        <style>
        body {
            background: linear-gradient(to right, #007bff, #00c6ff);
        }

        .card {
            border-radius: 15px;
        }
        </style>
    </head>

    <body>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow p-4" style="width: 350px;">
                <h4 class="text-center mb-3">Login SmartFlood</h4>

                <?php if(isset($error)) { ?>
                <div class="alert alert-danger"><?= $error ?></div>
                <?php } ?>

                <form method="POST">
                    <input type="email" name="email" class="form-control mb-3" placeholder="Email" required>
                    <input type="password" name="password" class="form-control mb-3" placeholder="Password" required>
                    <button name="login" class="btn btn-primary w-100">Login</button>
                </form>

                <p class="text-center mt-3">
                Belum punya akun? <a href="register.php">Register</a>
                </p>

            </div>
        </div>

    </body>
</html>