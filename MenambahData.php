<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menambah Data</title>
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
    echo "Setelah menambah data \n";
    $nama[] = "Dewi";
    cetak($nama);

    echo "Setelah di add lebih dari satu buah nilai \n";
    array_push($nama, "Eka", "Fajar");
    cetak($nama);
    ?>
</body>
</html>