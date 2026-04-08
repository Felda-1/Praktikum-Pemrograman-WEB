<?php
setcookie("user", "JohnDoe", time() + (86400 * 30), "/"); // Expires in 30 days
echo "Cookie telah diset.";
?>