<?php

class Home extends Controller {
    public function index() {
        $indexPath = dirname(__DIR__, 2) . '/public/index.html';
        if (file_exists($indexPath)) {
            require_once $indexPath;
        } else {
            $this->view('home/index');
        }
    }
}
