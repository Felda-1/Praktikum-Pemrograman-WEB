<?php

class Laporan_model {
    private $table = 'laporan';
    private $db;

    public function __construct() {
        $this->db = new Database;
    }

    public function getAllLaporanByUserId($user_id) {
        $this->db->query("SELECT * FROM " . $this->table . " WHERE user_id = :user_id ORDER BY waktu_laporan DESC");
        $this->db->bind('user_id', $user_id);
        return $this->db->resultSet();
    }

    public function getLaporanById($id) {
        $this->db->query("SELECT * FROM " . $this->table . " WHERE id = :id");
        $this->db->bind('id', $id);
        return $this->db->single();
    }

    public function addLaporan($data) {
        $query = "INSERT INTO " . $this->table . " 
                  (user_id, lokasi, waktu_laporan, jumlah_kendaraan, status_pelanggaran, deskripsi, foto_bukti) 
                  VALUES (:user_id, :lokasi, :waktu_laporan, :jumlah_kendaraan, :status_pelanggaran, :deskripsi, :foto_bukti)";
        
        $this->db->query($query);
        $this->db->bind('user_id', $data['user_id']);
        $this->db->bind('lokasi', $data['lokasi']);
        $this->db->bind('waktu_laporan', $data['waktu_laporan']);
        $this->db->bind('jumlah_kendaraan', $data['jumlah_kendaraan']);
        $this->db->bind('status_pelanggaran', $data['status_pelanggaran']);
        $this->db->bind('deskripsi', $data['deskripsi']);
        $this->db->bind('foto_bukti', $data['foto_bukti']);

        $this->db->execute();
        return $this->db->rowCount();
    }

    public function updateLaporan($data) {
        $query = "UPDATE " . $this->table . " SET 
                  lokasi = :lokasi, 
                  waktu_laporan = :waktu_laporan, 
                  jumlah_kendaraan = :jumlah_kendaraan, 
                  status_pelanggaran = :status_pelanggaran, 
                  deskripsi = :deskripsi, 
                  foto_bukti = :foto_bukti 
                  WHERE id = :id AND user_id = :user_id";
        
        $this->db->query($query);
        $this->db->bind('id', $data['id']);
        $this->db->bind('user_id', $data['user_id']);
        $this->db->bind('lokasi', $data['lokasi']);
        $this->db->bind('waktu_laporan', $data['waktu_laporan']);
        $this->db->bind('jumlah_kendaraan', $data['jumlah_kendaraan']);
        $this->db->bind('status_pelanggaran', $data['status_pelanggaran']);
        $this->db->bind('deskripsi', $data['deskripsi']);
        $this->db->bind('foto_bukti', $data['foto_bukti']);

        $this->db->execute();
        return $this->db->rowCount();
    }

    public function deleteLaporan($id, $user_id) {
        $this->db->query("DELETE FROM " . $this->table . " WHERE id = :id AND user_id = :user_id");
        $this->db->bind('id', $id);
        $this->db->bind('user_id', $user_id);
        $this->db->execute();
        return $this->db->rowCount();
    }

    public function getStatsByUserId($user_id) {
        $query = "SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN status_pelanggaran = 'Ringan' THEN 1 ELSE 0 END) as ringan,
                    SUM(CASE WHEN status_pelanggaran = 'Sedang' THEN 1 ELSE 0 END) as sedang,
                    SUM(CASE WHEN status_pelanggaran = 'Berat' THEN 1 ELSE 0 END) as berat
                  FROM " . $this->table . " WHERE user_id = :user_id";
        $this->db->query($query);
        $this->db->bind('user_id', $user_id);
        return $this->db->single();
    }
}
