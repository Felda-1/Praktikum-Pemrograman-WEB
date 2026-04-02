<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hapus Mahasiswa</title>
</head>
<body>
    <h2>Hapus Mahasiswa</h2>
    <form method="post" action="Delete.php">
        <label for="no">Nomor Mahasiswa:</label>
        <input type="number" name="no" value="<?= $row['No.'] ?>" required><br><br>

        <button type="submit">Hapus</button>
    </form>
</body>
</html>
