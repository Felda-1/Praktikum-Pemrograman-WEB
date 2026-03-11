<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SwitchCase</title>
</head>
<body>
    <?php
    $warna = "merah";

    switch ($warna) {
        case "merah":
            echo "Warna merah dipilih.";
            break;
        case "hijau":
            echo "Warna hijau dipilih.";
            break;
        case "biru":
            echo "Warna biru dipilih.";
            break;
        default:
            echo "Warna tidak dikenal.";
    }
    ?>
    
</body>
</html>