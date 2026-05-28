<?php
class Profile extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Profile_model');

        if (!$this->session->userdata('user_id')) {
            redirect('auth/login');
        }
    }

    public function index() {
        $user_id = $this->session->userdata('user_id');

        $data['profile'] = $this->Profile_model->getByUser($user_id);

        $this->load->view('profile_view', $data);
    }

    public function save() {
        $user_id = $this->session->userdata('user_id');

        $data = [
            'user_id' => $user_id,
            'nama_usaha' => $this->input->post('nama_usaha'),
            'jenis_usaha' => $this->input->post('jenis_usaha'),
            'tentang' => $this->input->post('tentang'),
        ];

        $this->Profile_model->save($data, $user_id);

        redirect('profile');
    }

    public function delete() {
        $this->Profile_model->delete($this->session->userdata('user_id'));
        redirect('profile');
    }
}