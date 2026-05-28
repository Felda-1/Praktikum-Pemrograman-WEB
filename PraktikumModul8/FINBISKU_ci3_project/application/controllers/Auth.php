<?php
class Auth extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('User_model');
    }

    public function login() {
        $this->load->view('login_view');
    }

    public function register() {
        $this->load->view('register_view');
    }

    public function proses_login() {
        $email = $this->input->post('email');
        $password = $this->input->post('password');

        $user = $this->User_model->login($email);

        if ($user && password_verify($password, $user->password)) {
            $this->session->set_userdata([
                'user_id' => $user->id,
                'nama' => $user->nama
            ]);
            redirect('profile');
        } else {
            echo "Login gagal";
        }
    }

    public function proses_register() {
        $nama = $this->input->post('nama');
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $confirm = $this->input->post('confirm_password');

        if ($password != $confirm) {
            redirect('auth/register');
        }

        if ($this->User_model->cekEmail($email)) {
            redirect('auth/register');
        }

        $data = [
            'nama' => $nama,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT)
        ];

        $this->User_model->register($data);

        redirect('auth/login');
    }

    public function logout() {
        $this->session->sess_destroy();
        redirect('auth/login');
    }
}