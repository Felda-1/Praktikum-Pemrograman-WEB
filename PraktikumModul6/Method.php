<?php
class Mobil2 {
    public function maju() {
        echo "Mobil bergerak maju";
    }

    public function berhenti() {
        echo "Mobil berhenti";
    }

    public function belok($arah) {
        echo "Mobil belok " . $arah;
    }
}
$myCar = new Mobil2();
$myCar->maju();
$myCar->berhenti();
$myCar->belok("kanan");
?>