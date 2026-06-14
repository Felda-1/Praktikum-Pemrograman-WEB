<?php

class Middleware {
    public static function auth() {
        if (!isset($_SESSION['user_id'])) {
            header('Content-Type: application/json');
            echo json_encode(['status' => 'error', 'message' => 'Silakan login terlebih dahulu.']);
            exit;
        }
    }
}
