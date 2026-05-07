<?php
class Mobil {
    public $warna;
    public $merk;
    protected $ukuran;
    
    public function __construct($warna, $merk, $ukuran){
        $this->warna = $warna;
        $this->merk = $merk;
        $this->ukuran = $ukuran;
    }
    
    public function getMerk(){
        return $this->merk;
    }
}

$mobilBru = new Mobil ("Merah", "Toyota", "Sedan");
echo "warna mobil: " . $mobilBru->warna . "<br>";
?>