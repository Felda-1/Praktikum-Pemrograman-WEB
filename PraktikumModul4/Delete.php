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
    $no = $_POST["no"];

    $sql = "DELETE FROM data_mahasiswa WHERE `No.`=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $no);

    if ($stmt->execute()) {
        echo "Data berhasil dihapus";
    } else {
        echo "Error: gagal menghapus data " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>