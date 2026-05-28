<?php
class Mobil {
    public $merk;
    public $warna;
    public function __construct($merk, $warna){
        $this->merk = $merk;
        $this->warna = $warna;
    }
    public function tampilkanInfo(){
        return "Mobil ini adalah " . $this->merk . " berwarna " . $this->warna . ".";
    }
}

class MobilSport extends Mobil {
    public $kecepatanMaksimal;

    public function __construct($merk, $warna, $kecepatanMaksimal){
        parent::__construct($merk, $warna);
        $this->kecepatanMaksimal = $kecepatanMaksimal;
    }

    public function tampilkanInfoSport(){
        return parent::tampilkanInfo() . " Kecepatan maksimalnya adalah " . $this->kecepatanMaksimal . " km/h.";
    }
}

$mobil = new MobilSport("Ferrari", "Merah", 350);
echo $mobil->tampilkanInfoSport();
?>