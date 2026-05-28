<?php
session_start();

// proteksi halaman
if (!isset($_SESSION['login'])) {
    header("Location: Login.php");
    exit;
}

// inisialisasi data
if (!isset($_SESSION['data'])) {
    $_SESSION['data'] = [];
}

// CREATE
if (isset($_POST['tambah'])) {
    $nama = $_POST['nama'];
    $keterangan = $_POST['keterangan'];

    if (!empty($nama) && !empty($keterangan)) {
        $_SESSION['data'][] = [
            "nama" => $nama,
            "keterangan" => $keterangan
        ];
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h2>Halo, <?php echo $_SESSION['username']; ?> 👋</h2>

<h3>Tambah Data Transaksi</h3>
<form method="POST">
    <input type="text" name="nama" placeholder="Nama"><br><br>
    <input type="text" name="keterangan" placeholder="Keterangan"><br><br>
    <button type="submit" name="tambah">Tambah</button>
</form>

<h3>Data Tersimpan</h3>
<table border="1">
<tr>
    <th>No</th>
    <th>Nama</th>
    <th>Keterangan</th>
</tr>

<?php
if (!empty($_SESSION['data'])) {
    $no = 1;
    foreach ($_SESSION['data'] as $item) {
        echo "<tr>
                <td>$no</td>
                <td>{$item['nama']}</td>
                <td>{$item['keterangan']}</td>
              </tr>";
        $no++;
    }
} else {
    echo "<tr><td colspan='3'>Belum ada data</td></tr>";
}
?>
</table>

<br>
<a href="Logout.php">Logout</a>

</body>
</html>