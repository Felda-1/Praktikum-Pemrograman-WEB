<?php
session_start();

include 'config/Database.php';
include 'classes/User.php';

$db = new Database();
$conn = $db->getConnection();

$user = new User($conn);
$user->login($_POST['email'], $_POST['password']);