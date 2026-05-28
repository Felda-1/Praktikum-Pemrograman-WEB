<?php
if (isset ($_COOKIE["user"])) {
    echo "Username: " . $_COOKIE["user"];
} else {
    echo "Cookie tidak ditemukan";
}
?>