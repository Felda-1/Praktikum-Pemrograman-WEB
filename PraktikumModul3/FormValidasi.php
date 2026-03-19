<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sederhana Dengan Validasi</title>
</head>
<body>
    <h2>Form Input</h2>
    <form method = "post" action="">
        nama: <input type="text" name="name" value = "<?php echo $name ?>" required>
        <span style="color: red;"><?php echo $nameErr; ?></span>
        <br><br>
        
        email: <input type="email" name="email" value = "<?php echo $email ?>" required>
        <span style="color: red;"><?php echo $emailErr; ?></span>
        <br><br>
        
        password: <input type="password" name="password" required>
        <span style="color: red;"><?php echo $passwordErr; ?></span>
        <br><br>
        
        <input type="submit" value="Submit">
    </form>
</body>
</html>