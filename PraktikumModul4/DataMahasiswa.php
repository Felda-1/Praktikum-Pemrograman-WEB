<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Mahasiswa</title>
</head>
<body>
    <h2>Daftar Mahasiswa</h2>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>NIM</th>
                <th>Jurusan</th>
                <th>Kelas</th>
            </tr>
        </thead>
        <tbody>
            <?php include 'Read.php'; ?>
        </tbody>
    </table>

    <br>
    <button onclick="location.href='Form_Input.html'">Tambah Data Mahasiswa</button>
    <button onclick="location.href='Form_Update.php'">Update Data Mahasiswa</button>
    <button onclick="location.href='Form_Delete.php'">Hapus Data Mahasiswa</button>

</body>
</html>