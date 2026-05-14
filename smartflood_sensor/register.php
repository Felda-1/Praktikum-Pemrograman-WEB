<?php
include 'koneksi.php';

if (isset($_POST['register'])) {
    $nama = htmlspecialchars($_POST['nama']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $password = $_POST['password'];

    if (!$email) {
        $error = "Email tidak valid!";
    } elseif (strlen($password) < 6) {
        $error = "Password minimal 6 karakter!";
    } else {
        $cek = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
        if (mysqli_num_rows($cek) > 0) {
            $error = "Email sudah terdaftar!";
        } else {
            mysqli_query($conn, "INSERT INTO users VALUES ('', '$nama', '$email', '$password')");
            $success = "Registrasi berhasil! Silakan login.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Register - SmartFlood</title>
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
                <h4 class="text-center mb-3">Register SmartFlood</h4>

                <?php if(isset($error)) { ?>
                    <div class="alert alert-danger"><?= $error ?></div>
                <?php } ?>

                <?php if(isset($success)) { ?>
                    <div class="alert alert-success"><?= $success ?></div>
                <?php } ?>

                <form method="POST">
                    <input type="text" name="nama" class="form-control mb-3" placeholder="Nama Lengkap" required>
                    <input type="email" name="email" class="form-control mb-3" placeholder="Email" required>
                    <input type="password" name="password" class="form-control mb-3" placeholder="Password" required>
                    <button name="register" class="btn btn-success w-100">Register</button>
                </form>

                <p class="text-center mt-3">
                Sudah punya akun? <a href="login.php">Login</a>
                </p>
            </div>
        </div>
    </body>
</html>