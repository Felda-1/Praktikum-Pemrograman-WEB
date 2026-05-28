<?php
session_start();

include 'config/Database.php';
include 'classes/Profile.php';

$db = new Database();
$conn = $db->getConnection();

$profile = new Profile($conn);
$profile->delete($_SESSION['user_id']);