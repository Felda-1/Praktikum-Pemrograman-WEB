<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menghapus Data</title>
</head>
<body>
    <?php
    function cetak($arr) {
        for ($x = 0; $x < count($arr); $x++) {
            echo "Nama: $arr[$x] . \n";
        }
    }
    $nama = array("Andi", "Budi", "Citra");
    cetak($nama);
    echo "Setelah menghapus elemen pertama menggunakan array_splice \n";
    array_splice($nama, 1, 1  );
    cetak($nama);
    ?>
</body>
</html>