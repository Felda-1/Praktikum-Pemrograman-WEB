<?php
$name = $email = $password = "";
$nameErr = $emailErr = $passwordErr = "";

if ($_REQUEST_METHOD == "POST") {
   function test_input($data) {
     return htmlspecialchars(stripslashes(trim($data)));
   }

   if (isset($_POST["name"])) {
     $name = test_input($_POST["name"]);
     if (empty($name)) {
       $nameErr = "Nama harus diisi";
     } else
     if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
       $nameErr = "Hanya huruf dan spasi yang diperbolehkan";
     }
   }

   if (isset($_POST["email"])) {
     $email = test_input($_POST["email"]);
     if (empty($email)) {
       $emailErr = "Email harus diisi";
     } else
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Format email tidak valid";
     }
   }

   if (isset($_POST["password"])) {
     $password = test_input($_POST["password"]);
     if (empty($password)) {
       $passwordErr = "Password harus diisi";
     } elseif (strlen($password) < 6) {
       $passwordErr = "Password harus memiliki setidaknya 6 karakter";
     }elseif (!preg_match("/[\W]/", $password)) {
       $passwordErr = "Password harus mengandung minimal 1 karakter spesial (seperti !@#$%^&*)";
     }
   }

   if ($nameErr && !$emailErr && !$passwordErr) {
     echo "Data yang diterima:<br>";
     echo "Nama: " . $name . "<br>";
     echo "Email: " . $email . "<br>";
   }
}
?>  