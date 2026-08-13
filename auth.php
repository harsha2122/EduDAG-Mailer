<?php
header('Content-Type: application/json; charset=UTF-8');
session_start();
require_once 'config.php';

function respondAuth($statusCode, $success, $message) {
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'authenticated' => !empty($_SESSION['mailer_authenticated']),
    ]);
    exit;
}

$action = $_GET['action'] ?? $_POST['action'] ?? 'status';

if ($action === 'status') {
    respondAuth(200, true, !empty($_SESSION['mailer_authenticated']) ? 'Authenticated' : 'Not authenticated');
}

if ($action === 'logout') {
    unset($_SESSION['mailer_authenticated']);
    if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) {
        respondAuth(200, true, 'Logged out');
    } else {
        header('Location: login.php');
        exit;
    }
}

if ($action !== 'login') {
    respondAuth(400, false, 'Invalid action');
}

$password = (string) ($_POST['password'] ?? '');

if ($password !== MAILER_PASSWORD) {
    respondAuth(401, false, MSG_AUTH_ERROR);
}

$_SESSION['mailer_authenticated'] = true;
respondAuth(200, true, 'Authenticated');
