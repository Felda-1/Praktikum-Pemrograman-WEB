<?php
class User {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function register($nama, $email, $password, $confirm) {

        if ($password !== $confirm) {
            header("Location: profile.html?status=password_tidak_sama");
            exit;
        }

        $cek = $this->conn->query("SELECT * FROM users WHERE email='$email'");
        if ($cek->num_rows > 0) {
            header("Location: profile.html?status=email_sudah_ada");
            exit;
        }

        $hash = password_hash($password, PASSWORD_DEFAULT);

        $this->conn->query("INSERT INTO users (nama,email,password)
                            VALUES ('$nama','$email','$hash')");

        header("Location: masuk.html?status=sukses");
    }

    public function login($email, $password) {
        $result = $this->conn->query("SELECT * FROM users WHERE email='$email'");
        $data = $result->fetch_assoc();

        if ($data && password_verify($password, $data['password'])) {
            $_SESSION['user_id'] = $data['id'];
            $_SESSION['nama'] = $data['nama'];

            header("Location: profile2.php");
        } else {
            echo "Login gagal!";
        }
    }
}