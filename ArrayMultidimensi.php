<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array Multidimensi</title>
</head>
<body>
    <?php
    $data = [
        ["Andi", 25, "Sistem Informasi"],
        ["Budi", 30, "Administrasi Bisnis"],
        ["Citra", 28, "Teknik Informatika"]
    ];
    echo $data[0][0] . " - " . $data[0][1] . " - " . $data[0][2]; // Output: Andi - 25 - Sistem Informasi
    echo "<br>";
    echo $data[1][0] . " - " . $data[1][1] . " - " . $data[1][2]; // Output: Budi - 30 - Administrasi Bisnis
    echo "<br>";
    echo $data[2][0] . " - " . $data[2][1] . " - " . $data[2][2]; // Output: Citra - 28 - Teknik Informatika
    ?>
</body>
</html>