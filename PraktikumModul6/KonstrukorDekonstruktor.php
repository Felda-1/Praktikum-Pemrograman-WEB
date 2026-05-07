<?php
class Mobil {
    public $merk;
    public $warna;
    public function __construct($merk, $warna){
        $this->merk = $merk;
        $this->warna = $warna;
        echo "Mobil dengan merk " . $this->merk . " dan warna " . $this->warna . " telah dibuat.<br>";
    }
    public function jalankan(){
        echo "Mobil " . $this->merk . " sedang berjalan.<br>";
    }

    public function __destruct(){
        echo "Mobil dengan merk " . $this->merk . " dan warna " . $this->warna . " telah dihancurkan.<br>";
    }
}

$mobil1 = new Mobil("Toyota", "Merah");
$mobil1->jalankan();
?>