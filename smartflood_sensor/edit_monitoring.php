<?php
session_start();
include 'koneksi.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$id = $_GET['id'];
$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM monitoring WHERE id='$id'"));

if (isset($_POST['update'])) {

    $tinggi = $_POST['tinggi'];
    $deskripsi = htmlspecialchars($_POST['deskripsi']);

    if (!is_numeric($tinggi)) {
        die("Tinggi harus angka!");
    }

    if ($tinggi <= 50) $status = "Aman";
    elseif ($tinggi <= 100) $status = "Waspada";
    else $status = "Bahaya";

    if ($_FILES['foto']['name'] != "") {
        unlink("uploads/".$data['foto_bukti']);

        $foto = time()."_".$_FILES['foto']['name'];
        move_uploaded_file($_FILES['foto']['tmp_name'], "uploads/".$foto);
    } else {
        $foto = $data['foto_bukti'];
    }

    $query = mysqli_query($conn, "UPDATE monitoring SET 
        tinggi_air='$tinggi',
        status_banjir='$status',
        deskripsi='$deskripsi',
        foto_bukti='$foto'
        WHERE id='$id'");

    if (!$query) {
        die("Error: " . mysqli_error($conn));
    }

    header("Location: monitoring.php");
    exit;
}
?>

<?php include 'navbar.php'; ?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-4">
    <div class="card shadow">
        <div class="card-header bg-warning">
            Edit Monitoring
        </div>

        <div class="card-body">
            <form method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <label>Lokasi Sungai</label>
                    <input type="text" class="form-control" value="<?= $data['lokasi_sungai']; ?>" readonly>
                </div>

                <div class="mb-3">
                    <label>Tinggi Air (cm)</label>
                    <input type="number" name="tinggi" class="form-control" value="<?= $data['tinggi_air']; ?>" required>
                </div>

                <div class="mb-3">
                    <label>Deskripsi</label>
                    <textarea name="deskripsi" class="form-control"><?= $data['deskripsi']; ?></textarea>
                </div>

                <div class="mb-3">
                    <label>Foto Lama</label><br>
                    <img src="uploads/<?= $data['foto_bukti']; ?>" width="120" class="rounded mb-2">
                </div>

                <div class="mb-3">
                    <label>Upload Foto Baru (opsional)</label>
                    <input type="file" name="foto" class="form-control">
                </div>

                <button type="submit" name="update" class="btn btn-success">Update</button>
                <a href="monitoring.php" class="btn btn-secondary">Kembali</a>
            </form>
        </div>
    </div>
</div>