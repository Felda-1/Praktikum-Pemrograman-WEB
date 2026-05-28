<?php
session_start();
include 'FinKoneksi.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: masuk.html");
    exit;
}

// ambil data profile dari database
$user_id = $_SESSION['user_id'];

$query = "SELECT * FROM profiles WHERE user_id='$user_id'";
$result = $conn->query($query);
$data = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <div class="signup-header">

            <div class="section-signup">
                <form action="proses_profile.php" method="POST" 
                enctype="multipart/form-data">
                    <div class="avatar-wrapper">
                        <img src="<?php 
                            echo !empty($data['foto']) 
                            ? 'upload/'.$data['foto'] 
                            : 'profil default.jpeg'; 
                        ?>" class="avatar">

                        <label for="foto" class="custom-file-upload">
                            Pilih Foto
                        </label>
                        <input type="file" name="foto" id="foto">
                    </div>

                    <h2 class="title"><?php echo $_SESSION['nama']; ?></h2>
                    <div class="input">
                    
                        <p>Alamat Email</p>
                        <input type="email" value="<?php echo $_SESSION['nama']; ?>" disabled>

                        <p>Nama Usaha</p>
                        <input type="text" name="nama_usaha"
                            value="<?php echo $data['nama_usaha'] ?? ''; ?>">

                        <p>Jenis Usaha</p>
                        <input type="text" name="jenis_usaha"
                            value="<?php echo $data['jenis_usaha'] ?? ''; ?>">

                        <p>Tentang</p>
                        <input type="text" name="tentang"
                            value="<?php echo $data['tentang'] ?? ''; ?>">
                    </div>

                    <div class="create-account">
                        <button type="submit" class="btn-primary">Simpan Profile</button>
                    </div>

                </form>

                <hr>

                <p class="login">
                    <a href="logout.php" class="link">Keluar</a>
                </p>

                <form action="delete_profile.php" method="POST" 
                    onsubmit="return confirm('Yakin mau hapus profile?')">

                    <button type="submit" class="btn-primary_delete">
                        Hapus Profile
                     </button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>