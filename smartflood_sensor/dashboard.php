<?php
session_start();
include 'koneksi.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

include 'navbar.php';

// DATA
$total = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as t FROM monitoring WHERE user_id=".$_SESSION['user_id']));
$aman = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as t FROM monitoring WHERE status_banjir='Aman' AND user_id=".$_SESSION['user_id']));
$waspada = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as t FROM monitoring WHERE status_banjir='Waspada' AND user_id=".$_SESSION['user_id']));
$bahaya = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as t FROM monitoring WHERE status_banjir='Bahaya' AND user_id=".$_SESSION['user_id']));
?>

<!DOCTYPE html>
    <html>
        <head>
            <title>Dashboard</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        </head>

        <body>

            <div class="container mt-4">
                <h3>Halo, <?= $_SESSION['nama']; ?></h3>
                <div class="row mt-4">
                    <div class="col-md-3">
                        <div class="card bg-primary text-white shadow">
                            <div class="card-body">
                                <h5>Total</h5>
                                <h2><?= $total['t']; ?></h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card bg-success text-white shadow">
                            <div class="card-body">
                                <h5>Aman</h5>
                                <h2><?= $aman['t']; ?></h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card bg-warning shadow">
                            <div class="card-body">
                                <h5>Waspada</h5>
                                <h2><?= $waspada['t']; ?></h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body">
                                <h5>Bahaya</h5>
                                <h2><?= $bahaya['t']; ?></h2>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- CHART -->
                <div class="card mt-4 shadow">
                    <div class="card-body">
                        <canvas id="chartBanjir"></canvas>
                    </div>
                </div>
            </div>

            <script>
            const ctx = document.getElementById('chartBanjir');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Aman', 'Waspada', 'Bahaya'],
                    datasets: [{
                        label: 'Jumlah Data',
                        data: [<?= $aman['t']; ?>, <?= $waspada['t']; ?>, <?= $bahaya['t']; ?>],
                        backgroundColor: ['green', 'orange', 'red']
                    }]
                }
            });
            </script>

        </body>
    </html>