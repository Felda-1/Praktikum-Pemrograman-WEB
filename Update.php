<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
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
    echo "Setelah diupdate \n";
    $nama[1] = "Dewi";
    cetak($nama);
    ?>
</body>
</html>