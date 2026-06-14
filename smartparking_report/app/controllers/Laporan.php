<?php

class Laporan extends Controller {
    public function __construct() {
        Middleware::auth();
    }

    public function index() {
        $laporanModel = $this->model('Laporan_model');
        $data = $laporanModel->getAllLaporanByUserId($_SESSION['user_id']);
        return $this->json('success', 'Daftar laporan berhasil diambil.', $data);
    }

    public function detail($id) {
        $laporanModel = $this->model('Laporan_model');
        $data = $laporanModel->getLaporanById($id);

        if ($data && $data['user_id'] == $_SESSION['user_id']) {
            return $this->json('success', 'Detail laporan ditemukan.', $data);
        } else {
            return $this->json('error', 'Data tidak ditemukan atau akses dilarang.', [], 404);
        }
    }

    public function store() {
        $lokasi = $_POST['lokasi'] ?? '';
        $waktu = $_POST['waktu_laporan'] ?? '';
        $jumlah = $_POST['jumlah_kendaraan'] ?? 0;
        $deskripsi = $_POST['deskripsi'] ?? '';

        if (empty($lokasi) || empty($waktu) || empty($jumlah) || empty($deskripsi)) {
            return $this->json('error', 'Semua field wajib diisi.');
        }

        $status = 'Ringan';
        if ($jumlah >= 6 && $jumlah <= 15) {
            $status = 'Sedang';
        } elseif ($jumlah > 15) {
            $status = 'Berat';
        }

        // Handle File Upload
        $foto_name = '';
        if (isset($_FILES['foto_bukti']) && $_FILES['foto_bukti']['error'] == 0) {
            $allowed = ['jpg', 'jpeg', 'png'];
            $ext = strtolower(pathinfo($_FILES['foto_bukti']['name'], PATHINFO_EXTENSION));

            if (!in_array($ext, $allowed)) {
                return $this->json('error', 'Format file tidak diizinkan.');
            }

            $foto_name = uniqid() . '.' . $ext;
            if (!move_uploaded_file($_FILES['foto_bukti']['tmp_name'], UPLOAD_PATH . $foto_name)) {
                return $this->json('error', 'Gagal mengupload foto.');
            }
        } else {
            return $this->json('error', 'Foto bukti wajib diupload.');
        }

        $laporanModel = $this->model('Laporan_model');
        $data = [
            'user_id' => $_SESSION['user_id'],
            'lokasi' => $lokasi,
            'waktu_laporan' => $waktu,
            'jumlah_kendaraan' => $jumlah,
            'status_pelanggaran' => $status,
            'deskripsi' => $deskripsi,
            'foto_bukti' => $foto_name
        ];

        if ($laporanModel->addLaporan($data) > 0) {
            return $this->json('success', 'Laporan berhasil disimpan.');
        } else {
            return $this->json('error', 'Gagal menyimpan laporan.');
        }
    }

    public function update($id) {
        $laporanModel = $this->model('Laporan_model');
        $oldData = $laporanModel->getLaporanById($id);

        if (!$oldData || $oldData['user_id'] != $_SESSION['user_id']) {
            return $this->json('error', 'Data tidak ditemukan atau akses dilarang.', [], 404);
        }

        $lokasi = $_POST['lokasi'] ?? $oldData['lokasi'];
        $waktu = $_POST['waktu_laporan'] ?? $oldData['waktu_laporan'];
        $jumlah = $_POST['jumlah_kendaraan'] ?? $oldData['jumlah_kendaraan'];
        $deskripsi = $_POST['deskripsi'] ?? $oldData['deskripsi'];

        $status = 'Ringan';
        if ($jumlah >= 6 && $jumlah <= 15) {
            $status = 'Sedang';
        } elseif ($jumlah > 15) {
            $status = 'Berat';
        }

        $foto_name = $oldData['foto_bukti'];
        if (isset($_FILES['foto_bukti']) && $_FILES['foto_bukti']['error'] == 0) {
            $allowed = ['jpg', 'jpeg', 'png'];
            $ext = strtolower(pathinfo($_FILES['foto_bukti']['name'], PATHINFO_EXTENSION));

            if (in_array($ext, $allowed)) {
                if (file_exists(UPLOAD_PATH . $oldData['foto_bukti'])) {
                    unlink(UPLOAD_PATH . $oldData['foto_bukti']);
                }
                $foto_name = uniqid() . '.' . $ext;
                move_uploaded_file($_FILES['foto_bukti']['tmp_name'], UPLOAD_PATH . $foto_name);
            }
        }

        $data = [
            'id' => $id,
            'user_id' => $_SESSION['user_id'],
            'lokasi' => $lokasi,
            'waktu_laporan' => $waktu,
            'jumlah_kendaraan' => $jumlah,
            'status_pelanggaran' => $status,
            'deskripsi' => $deskripsi,
            'foto_bukti' => $foto_name
        ];

        if ($laporanModel->updateLaporan($data) >= 0) {
            return $this->json('success', 'Laporan berhasil diperbarui.');
        } else {
            return $this->json('error', 'Gagal memperbarui laporan.');
        }
    }

    public function destroy($id) {
        $laporanModel = $this->model('Laporan_model');
        $data = $laporanModel->getLaporanById($id);

        if ($data && $data['user_id'] == $_SESSION['user_id']) {
            if (file_exists(UPLOAD_PATH . $data['foto_bukti'])) {
                unlink(UPLOAD_PATH . $data['foto_bukti']);
            }

            if ($laporanModel->deleteLaporan($id, $_SESSION['user_id']) > 0) {
                return $this->json('success', 'Laporan berhasil dihapus.');
            } else {
                return $this->json('error', 'Gagal menghapus laporan.');
            }
        } else {
            return $this->json('error', 'Akses dilarang atau data tidak ditemukan.', [], 403);
        }
    }

    public function stats() {
        $laporanModel = $this->model('Laporan_model');
        $stats = $laporanModel->getStatsByUserId($_SESSION['user_id']);
        
        $db = new Database();
        $db->query("SELECT * FROM laporan WHERE user_id = :user_id ORDER BY waktu_laporan DESC LIMIT 5");
        $db->bind('user_id', $_SESSION['user_id']);
        $latest = $db->resultSet();

        return $this->json('success', 'Statistik dashboard berhasil diambil.', [
            'stats' => $stats,
            'latest' => $latest
        ]);
    }
}
