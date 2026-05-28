<?php
session_start();
include 'FinKoneksi.php';

$user_id = $_SESSION['user_id'];

$nama_usaha = $_POST['nama_usaha'];
$jenis_usaha = $_POST['jenis_usaha'];
$tentang = $_POST['tentang'];

$nama_file = $_FILES['foto']['name'];
$tmp_file = $_FILES['foto']['tmp_name'];

$folder = "upload/";

// kalau ada file diupload
if (!empty($nama_file)) {
    move_uploaded_file($tmp_file, $folder . $nama_file);
}

// cek sudah ada profile atau belum
$cek = "SELECT * FROM profiles WHERE user_id='$user_id'";
$result = $conn->query($cek);

if ($result->num_rows > 0) {

    if (!empty($nama_file)) {
        $query = "UPDATE profiles SET
                  nama_usaha='$nama_usaha',
                  jenis_usaha='$jenis_usaha',
                  tentang='$tentang',
                  foto='$nama_file'
                  WHERE user_id='$user_id'";
    } else {
        $query = "UPDATE profiles SET
                  nama_usaha='$nama_usaha',
                  jenis_usaha='$jenis_usaha',
                  tentang='$tentang'
                  WHERE user_id='$user_id'";
    }

} else {

    if (!empty($nama_file)) {
        $query = "INSERT INTO profiles 
                  (user_id, nama_usaha, jenis_usaha, tentang, foto)
                  VALUES 
                  ('$user_id','$nama_usaha','$jenis_usaha','$tentang','$nama_file')";
    } else {
        $query = "INSERT INTO profiles 
                  (user_id, nama_usaha, jenis_usaha, tentang)
                  VALUES 
                  ('$user_id','$nama_usaha','$jenis_usaha','$tentang')";
    }
}

$conn->query($query);


header("Location: profile2.php");
exit;
?>