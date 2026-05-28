<?php
class User_model extends CI_Model {

    public function register($data) {
        return $this->db->insert('users', $data);
    }

    public function cekEmail($email) {
        return $this->db->get_where('users', ['email'=>$email])->row();
    }

    public function login($email) {
        return $this->db->get_where('users', ['email'=>$email])->row();
    }
}