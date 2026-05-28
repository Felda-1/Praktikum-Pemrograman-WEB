<?php
session_start();
include 'koneksi.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

if (isset($_POST['submit'])) {

    $lokasi = htmlspecialchars($_POST['lokasi']);
    $tinggi = $_POST['tinggi'];
    $deskripsi = htmlspecialchars($_POST['deskripsi']);

    if (!is_numeric($tinggi)) {
        die("Tinggi harus angka!");
    }

    if ($tinggi <= 50) $status = "Aman";
    elseif ($tinggi <= 100) $status = "Waspada";
    else $status = "Bahaya";

    $foto = $_FILES['foto']['name'];
    $tmp = $_FILES['foto']['tmp_name'];

    if ($foto == "") {
        die("Foto wajib diisi!");
    }

    $ext = strtolower(pathinfo($foto, PATHINFO_EXTENSION));
    if (!in_array($ext, ['jpg','jpeg'])) {
        die("Format harus jpg/jpeg!");
    }

    $nama_file = time()."_".$foto;

    if (!move_uploaded_file($tmp, "uploads/".$nama_file)) {
        die("Upload gagal!");
    }

    $query = mysqli_query($conn, "INSERT INTO monitoring 
    (user_id, lokasi_sungai, waktu_pengukuran, tinggi_air, status_banjir, deskripsi, foto_bukti)
    VALUES 
    ('".$_SESSION['user_id']."', '$lokasi', NOW(), '$tinggi', '$status', '$deskripsi', '$nama_file')");

    if (!$query) {
        die("MYSQL ERROR: " . mysqli_error($conn));
    }

    header("Location: monitoring.php");
    exit;
}

include 'navbar.php';
?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-4">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
        Tambah Monitoring
        </div>

        <div class="card-body">
            <form method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <label>Lokasi</label>
                    <input type="text" name="lokasi" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label>Tinggi Air</label>
                    <input type="number" name="tinggi" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label>Deskripsi</label>
                    <textarea name="deskripsi" class="form-control"></textarea>
                </div>

                <div class="mb-3">
                    <label>Foto</label>
                    <input type="file" name="foto" class="form-control" required>
                </div>

                <button type="submit" name="submit" class="btn btn-success">Simpan</button>
            </form>
        </div>
    </div>
</div>