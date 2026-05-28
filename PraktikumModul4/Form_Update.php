<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Mahasiswa</title>
</head>
<body>
    <h2>Update Mahasiswa</h2>
    <form method="post" action="Update_process.php">
        <label for="no">No:</label>
        <input type="text" name="no" required><br><br>

        <label for="nama">Nama Baru:</label>
        <input type="text" name="Nama" required><br><br>

        <label for="nim">NIM Baru:</label>
        <input type="text" id="nim" name="NIM" required><br><br>

        <label for="jurusan">Jurusan Baru:</label>
        <input type="text" name="Jurusan" required><br><br>

        <label for="kelas">Kelas Baru:</label>
        <input type="text" name="Kelas" required><br><br>

        <button type="submit">Update</button>
    </form>
</body>
</html>