<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nasted</title>
</head>
<body>
    <?php
    $username = $_GET["username"] ?? "Guest";
    echo  $username;
    ?>
</body>
</html>