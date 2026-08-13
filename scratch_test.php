<?php
session_start();
$_SESSION['mailer_authenticated'] = true;
$_SERVER['REQUEST_METHOD'] = 'POST';
require_once 'config.php';
require_once 'send-email.php';

echo "Testing SMTP send...\n";

$to = 'info@edudag.com';
$toName = 'Test Recipient';
$subject = 'Test Attachment Mailer';
$body = '<h1>Test</h1><p>This is a test of attachments.</p>';
$attachments = [
    [
        'name' => 'test.txt',
        'mime' => 'text/plain',
        'content' => 'Hello World! This is a test attachment.',
    ]
];

$result = sendViaSMTP($to, $toName, $subject, $body, 'TEST-TOKEN-123', $attachments);
if ($result) {
    echo "SMTP sending SUCCESS!\n";
} else {
    echo "SMTP sending FAILED! Check error log above or below.\n";
}
