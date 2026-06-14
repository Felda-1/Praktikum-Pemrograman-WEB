<?php

class Auth extends Controller {
    public function register() {
        $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

        if (empty($input['nama']) || empty($input['email']) || empty($input['password'])) {
            return $this->json('error', 'Semua field wajib diisi.');
        }

        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            return $this->json('error', 'Format email tidak valid.');
        }

        if (strlen($input['password']) < 6) {
            return $this->json('error', 'Password minimal 6 karakter.');
        }

        $userModel = $this->model('User_model');
        if ($userModel->getUserByEmail($input['email'])) {
            return $this->json('error', 'Email sudah terdaftar.');
        }

        if ($userModel->register($input) > 0) {
            return $this->json('success', 'Registrasi berhasil. Silakan login.');
        } else {
            return $this->json('error', 'Gagal registrasi.', [], 500);
        }
    }

    public function login() {
        $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

        if (empty($input['email']) || empty($input['password'])) {
            return $this->json('error', 'Email dan password wajib diisi.');
        }

        $userModel = $this->model('User_model');
        $user = $userModel->getUserByEmail($input['email']);

        if ($user && password_verify($input['password'], $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_nama'] = $user['nama'];
            $_SESSION['user_email'] = $user['email'];

            return $this->json('success', 'Login berhasil.', [
                'id' => $user['id'],
                'nama' => $user['nama'],
                'email' => $user['email']
            ]);
        } else {
            return $this->json('error', 'Email atau password salah.', [], 401);
        }
    }

    public function logout() {
        session_destroy();
        return $this->json('success', 'Berhasil logout.');
    }

    public function user() {
        if (isset($_SESSION['user_id'])) {
            return $this->json('success', 'User session active', [
                'id' => $_SESSION['user_id'],
                'nama' => $_SESSION['user_nama'],
                'email' => $_SESSION['user_email']
            ]);
        } else {
            return $this->json('error', 'Unauthorized', [], 401);
        }
    }
}
