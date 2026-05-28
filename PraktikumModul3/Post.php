<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>form input</h2>
    <form method="post" action="">
        nama: <input type="text" name="name" required><br><br>
        email: <input type="email" name="email" required><br><br>
        <input type="submit" value="Submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["name"]) && isset($_POST["email"])) {
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        echo "<h3>Data yang Diterima:</h3>";
        echo "Nama: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
    }
    ?>
</body>
</html>