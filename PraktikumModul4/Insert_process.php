<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "modul4_webpro";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
} else {
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $nama = $_POST["Nama"];
        $nim = $_POST["NIM"];
        $jurusan = $_POST["Jurusan"];
        $kelas = $_POST["Kelas"];

        $sql = "INSERT INTO data_mahasiswa (NIM, Nama, Jurusan, Kelas) 
        VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $nim, $nama, $jurusan, $kelas);

        if ($stmt->execute()) {
            header("Location: Form_Input.html");
            exit();
        } else {
            echo "<p>Error: " . $stmt->error . "</p>";
        }
        $stmt->close();
    }
}
$conn->close();
?>