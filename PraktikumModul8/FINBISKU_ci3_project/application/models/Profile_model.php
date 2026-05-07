<?php
class Profile_model extends CI_Model {

    public function getByUser($user_id) {
        return $this->db->get_where('profiles', ['user_id'=>$user_id])->row_array();
    }

    public function save($data, $user_id) {

        $cek = $this->db->get_where('profiles',['user_id'=>$user_id])->row();

        if ($cek) {
            $this->db->where('user_id',$user_id);
            return $this->db->update('profiles',$data);
        } else {
            return $this->db->insert('profiles',$data);
        }
    }

    public function delete($user_id) {
        return $this->db->delete('profiles',['user_id'=>$user_id]);
    }
}