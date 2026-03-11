<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Argumen Default</title>
</head>
<body>
    <?php
    function Hallo($name = "Guest") {
        echo "Hello, $name!";
    }
    Hallo(); // Output: Hello, Guest!
    Hallo("World"); // Output: Hello, World!
    ?>
</body>
</html>