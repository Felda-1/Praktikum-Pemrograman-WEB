<?php
session_start();
include 'koneksi.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

include 'navbar.php';

$data = mysqli_query($conn, "SELECT * FROM monitoring WHERE user_id=".$_SESSION['user_id']);
?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-4">

    <h3>Data Monitoring</h3>

    <a href="tambah_monitoring.php" class="btn btn-primary mb-3">+ Tambah</a>

    <table class="table table-bordered table-hover shadow">
        <thead class="table-dark">
            <tr>
                <th>Lokasi</th>
                <th>Tinggi</th>
                <th>Status</th>
                <th>Foto</th>
                <th>Aksi</th>
            </tr>
        </thead>

        <tbody>
        <?php while($row = mysqli_fetch_assoc($data)) { ?>
            <tr>
                <td><?= $row['lokasi_sungai']; ?></td>
                <td><?= $row['tinggi_air']; ?> cm</td>

                <td>
                    <span class="badge 
                    <?= $row['status_banjir']=='Aman'?'bg-success':
                    ($row['status_banjir']=='Waspada'?'bg-warning':'bg-danger'); ?>">
                    <?= $row['status_banjir']; ?>
                    </span>
                </td>

                <td>
                    <img src="uploads/<?= $row['foto_bukti']; ?>" width="80" class="rounded">
                </td>

                <td>
                    <a href="edit_monitoring.php?id=<?= $row['id']; ?>" class="btn btn-warning btn-sm">Edit</a>
                    <a href="hapus_monitoring.php?id=<?= $row['id']; ?>" class="btn btn-danger btn-sm">Hapus</a>
                </td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</div>