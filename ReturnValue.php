<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Return Value</title>
</head>
<body>
    <?php
    function Halo(int $x = 0, int $y = 0) {
        return ($x + $y);
    }
    echo Halo(5, 10);
    $z = Halo(5,10);
    echo $z;
    ?>
</body>
</html>