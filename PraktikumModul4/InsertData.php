<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "modul4_webpro";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}else{
    $nim = "707012503";
    $nama = "Dimas Prasetyo";
    $jurusan = "Teknik Informatika";
    $kelas = "TI-2A";

    $sql = "INSERT INTO data_mahasiswa (NIM, Nama, Jurusan, Kelas) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nim, $nama, $jurusan, $kelas);
    
    if ($stmt->execute()) {
        echo "Data berhasil dimasukkan";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
} 

$conn->close();
?>