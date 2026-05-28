<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "modul4_webpro";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $nim = $_POST["NIM"];
    $nama = $_POST["Nama"];
    $jurusan = $_POST["Jurusan"];
    $kelas = $_POST["Kelas"];   

    $sql = "UPDATE data_mahasiswa SET NIM=?, Nama=?, Jurusan=?, Kelas=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $nim, $nama, $jurusan, $kelas, $id);

    if ($stmt->execute()) {
        echo "Data berhasil diperbarui";
    } else {
        echo "Error: gagal memperbarui data " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>