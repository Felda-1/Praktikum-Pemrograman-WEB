<?php
class Profile {
    private $conn;
    private $folder = "upload/";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getByUser($user_id) {
        $result = $this->conn->query("SELECT * FROM profiles WHERE user_id='$user_id'");
        return $result->fetch_assoc();
    }

    public function save($user_id, $data, $file) {

        $nama_usaha = $data['nama_usaha'];
        $jenis_usaha = $data['jenis_usaha'];
        $tentang = $data['tentang'];

        $nama_file = $file['foto']['name'];
        $tmp = $file['foto']['tmp_name'];

        // upload
        if (!empty($nama_file)) {
            move_uploaded_file($tmp, $this->folder . $nama_file);
        }

        $cek = $this->conn->query("SELECT * FROM profiles WHERE user_id='$user_id'");

        if ($cek->num_rows > 0) {

            if (!empty($nama_file)) {
                $query = "UPDATE profiles SET
                    nama_usaha='$nama_usaha',
                    jenis_usaha='$jenis_usaha',
                    tentang='$tentang',
                    foto='$nama_file'
                    WHERE user_id='$user_id'";
            } else {
                $query = "UPDATE profiles SET
                    nama_usaha='$nama_usaha',
                    jenis_usaha='$jenis_usaha',
                    tentang='$tentang'
                    WHERE user_id='$user_id'";
            }

        } else {

            if (!empty($nama_file)) {
                $query = "INSERT INTO profiles
                    (user_id,nama_usaha,jenis_usaha,tentang,foto)
                    VALUES
                    ('$user_id','$nama_usaha','$jenis_usaha','$tentang','$nama_file')";
            } else {
                $query = "INSERT INTO profiles
                    (user_id,nama_usaha,jenis_usaha,tentang)
                    VALUES
                    ('$user_id','$nama_usaha','$jenis_usaha','$tentang')";
            }
        }

        $this->conn->query($query);
        header("Location: profile2.php");
    }

    public function delete($user_id) {
        $this->conn->query("DELETE FROM profiles WHERE user_id='$user_id'");
        header("Location: profile2.php");
    }
}