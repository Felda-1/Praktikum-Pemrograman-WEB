<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foreach</title>
</head>
<body>
    <?php
    $angka = [1, 2, 3, 4, 5];
    foreach ($angka as $value) {
        echo "Ini Perulangan Foreach : $value <br>";
    }
    ?>
</body>
</html>