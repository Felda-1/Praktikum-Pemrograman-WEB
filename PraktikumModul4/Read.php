<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "modul4_webpro";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
$sql = "SELECT * FROM data_mahasiswa";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["No."] . "</td>
                <td>" . $row["NIM"] . "</td>
                <td>" . $row["Nama"] . "</td>
                <td>" . $row["Jurusan"] . "</td>
                <td>" . $row["Kelas"] . "</td>
            </tr>";
    }
} else {
    echo "<tr><td colspan='5'>Tidak ada data</td></tr>";
}
$conn->close();
?>