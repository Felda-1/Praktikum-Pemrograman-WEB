<?php
session_start();

include 'config/Database.php';
include 'classes/User.php';

$db = new Database();
$conn = $db->getConnection();

$user = new User($conn);
$user->register(
    $_POST['nama'],
    $_POST['email'],
    $_POST['password'],
    $_POST['confirm_password']
);