<?php
// CORS başlıqları
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Test üçün açıq saxlanılıb
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS sorğusunu emal et (CORS üçün)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Telegram Bot məlumatları
$botToken = '7214211715:AAG6gSNUJHGRyI3V5zDKaCFVbQQ9_IeJf4A';
$chat