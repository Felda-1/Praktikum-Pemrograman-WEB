<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Argumen Tipe Data</title>
</head>
<body>
    <?php
    function Halo(int $x = 0, int $y = 0) {
        echo  ($x + $y);
    }
    Halo(5, 10);
    ?>
</body>
</html>