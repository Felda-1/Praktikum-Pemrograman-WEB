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
        $no = $_POST['no'];
        $nama = $_POST["Nama"];
        $nim = $_POST["NIM"];
        $jurusan = $_POST["Jurusan"];
        $kelas = $_POST["Kelas"];
        

        $sql = "UPDATE data_mahasiswa SET NIM=?, Nama=?, Jurusan=?, Kelas=? 
        WHERE `No.`=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $nim, $nama, $jurusan, $kelas, $no);

        if ($stmt->execute()) {
            header("Location: DataMahasiswa.php?status=sukses");
            exit();
        } else {
            echo "<p>Error: gagal memperbarui data" . $stmt->error . "</p>";
        }
        $stmt->close();
    }
}
$conn->close();
?>