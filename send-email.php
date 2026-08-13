<?php
/**
 * Email Sending Handler
 * Processes form data and sends templated HTML email.
 */

session_start();
header('Content-Type: application/json; charset=UTF-8');
require_once 'config.php';

function respond($statusCode, $success, $message, $extra = []) {
    http_response_code($statusCode);
    echo json_encode(array_merge([
        'success' => $success,
        'message' => $message,
    ], $extra));
    exit;
}

if (empty($_SESSION['mailer_authenticated'])) {
    respond(401, false, 'Unauthorized access.');
}

function sanitizeText($input) {
    return trim((string) $input);
}

function escapeHtml($input) {
    return htmlspecialchars(sanitizeText($input), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function normalizeMultilineList($input) {
    $lines = preg_split('/\R/u', sanitizeText($input));
    $items = [];

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '') {
            continue;
        }

        $line = preg_replace('/^\s*(?:[-*•]|\d+[.)]?)\s*/u', '', $line);
        $items[] = '<li>' . escapeHtml($line) . '</li>';
    }

    return implode("\n", $items);
}

function sanitizeFilename($filename) {
    $filename = basename((string) $filename);
    $filename = preg_replace('/[^A-Za-z0-9._ -]+/', '_', $filename);
    $filename = trim($filename, "._- ");
    return $filename === '' ? 'attachment' : $filename;
}

function mimePartBoundary() {
    return '=_edudag_' . bin2hex(random_bytes(8));
}

function getMimeTypeForFile($path) {
    if (function_exists('finfo_open')) {
        $finfo = @finfo_open(FILEINFO_MIME_TYPE);
        if ($finfo) {
            $mime = finfo_file($finfo, $path);
            finfo_close($finfo);
            if (is_string($mime) && $mime !== '') {
                return $mime;
            }
        }
    }

    return 'application/octet-stream';
}

function collectAttachments($attachments) {
    $result = [];
    if (!is_array($attachments) || empty($attachments['name']) || !is_array($attachments['name'])) {
        return $result;
    }

    $count = count($attachments['name']);
    for ($i = 0; $i < $count; $i++) {
        $error = $attachments['error'][$i] ?? UPLOAD_ERR_NO_FILE;
        if ($error === UPLOAD_ERR_NO_FILE) {
            continue;
        }

        if ($error !== UPLOAD_ERR_OK) {
            throw new RuntimeException('Attachment upload failed.');
        }

        $tmpName = $attachments['tmp_name'][$i] ?? '';
        $size = (int) ($attachments['size'][$i] ?? 0);
        $originalName = sanitizeFilename($attachments['name'][$i] ?? '');

        if ($tmpName === '' || !is_uploaded_file($tmpName)) {
            throw new RuntimeException('Attachment upload missing temporary file.');
        }

        if ($size <= 0 || $size > MAX_ATTACHMENT_BYTES) {
            throw new RuntimeException('Attachment exceeds the allowed size.');
        }

        $content = file_get_contents($tmpName);
        if ($content === false) {
            throw new RuntimeException('Unable to read attachment content.');
        }

        $result[] = [
            'name' => $originalName,
            'mime' => getMimeTypeForFile($tmpName),
            'content' => $content,
        ];
    }

    return $result;
}

function loadNamedAttachment($relativePath) {
    $path = DOCS_DIR . ltrim(str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $relativePath), DIRECTORY_SEPARATOR);
    if (!is_file($path) || !is_readable($path)) {
        return null;
    }

    $content = file_get_contents($path);
    if ($content === false) {
        return null;
    }

    return [
        'name' => basename($path),
        'mime' => getMimeTypeForFile($path),
        'content' => $content,
    ];
}

function getTemplateAttachments($template) {
    $map = [
        'certificate_completion' => [],
        'sop_lor_preparation' => [
            'sop1.docx',
            'LOR1. (1) (2).pdf',
            'Professional LOR sample.pdf',
        ],
        'cv_submission' => [
            '(Edit this) Resume Template EduDAG.doc',
        ],
        'processing_fee_receipt' => [],
        'unicef_learning_activation' => [],
        'publication_initiative' => [
            'BOOK_DRAFT_SAMPLE_01.pdf',
            'BOOK_DRAFT_SAMPLE_02.pdf',
        ],
        'book_publication_offer' => [
            'BOOK_DRAFT_SAMPLE_01.pdf',
            'BOOK_DRAFT_SAMPLE_02.pdf',
        ],
        'yoga_session_completion' => [],
    ];

    $attachments = [];
    foreach ($map[$template] ?? [] as $relativePath) {
        $attachment = loadNamedAttachment($relativePath);
        if ($attachment) {
            $attachments[] = $attachment;
        }
    }

    return $attachments;
}

function listEmailTemplateFiles() {
    $files = glob(__DIR__ . DIRECTORY_SEPARATOR . 'email_templates' . DIRECTORY_SEPARATOR . '*.html') ?: [];
    sort($files, SORT_NATURAL | SORT_FLAG_CASE);
    return $files;
}

function getTemplateNameFromPath($path) {
    return pathinfo($path, PATHINFO_FILENAME);
}

function renderTemplateBody($templateBody, $data) {
    $logoPath = __DIR__ . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'logo.png';
    $logoSrc = is_file($logoPath)
        ? rtrim(SITE_URL, '/') . '/images/logo.png'
        : '';

    $replacements = [
        '{logo_src}' => $logoSrc,
        '{client_name}' => escapeHtml($data['client_name'] ?? ''),
        '{sme_name}' => escapeHtml($data['sme_name'] ?? ''),
        '{audit_fee}' => escapeHtml($data['audit_fee'] ?? ''),
        '{profile_fee}' => escapeHtml($data['profile_fee'] ?? ''),
        '{service_fee}' => escapeHtml($data['service_fee'] ?? ''),
        '{last_communication}' => escapeHtml($data['last_communication'] ?? ''),
        '{pending_action}' => escapeHtml($data['pending_action'] ?? ''),
        '{college_name}' => escapeHtml($data['college_name'] ?? ''),
        '{program_name}' => escapeHtml($data['program_name'] ?? ''),
        '{joining_date}' => escapeHtml($data['joining_date'] ?? ''),
        '{college_list}' => normalizeMultilineList($data['college_list'] ?? ''),
        '{custom_header_title}' => escapeHtml($data['custom_header_title'] ?? ''),
        '{custom_header_text}' => escapeHtml($data['custom_header_text'] ?? ''),
        '{custom_body_html}' => $data['custom_body_html'] ?? '',
    ];

    return strtr($templateBody, $replacements);
}

function encodeSubject($subject) {
    $subject = preg_replace("/[\r\n]+/", ' ', sanitizeText($subject));
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n");
    }
    return $subject;
}

function generateEmailToken() {
    try {
        $random = bin2hex(random_bytes(4));
    } catch (Throwable $e) {
        $random = bin2hex(pack('N', mt_rand()));
    }

    return date('YmdHis') . '-' . $random;
}

function sendEmail($to, $toName, $subject, $body, $attachments = []) {
    $threadToken = generateEmailToken();
    $subject = sanitizeText($subject) . ' [Ref: ' . $threadToken . ']';
    $subject = encodeSubject($subject);

    // Use authenticated SMTP first so the API only reports success when the
    // mail server actually accepts the message.
    if (sendViaSMTP($to, $toName, $subject, $body, $threadToken, $attachments)) {
        return true;
    }

    if (!defined('USE_MAIL_FALLBACK') || !USE_MAIL_FALLBACK) {
        if (DEBUG_MODE) {
            error_log('SMTP delivery failed and mail() fallback is disabled.');
        }
        return false;
    }

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    $headers[] = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_EMAIL . '>';
    $headers[] = 'Reply-To: ' . SMTP_FROM_EMAIL;
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    $headerString = implode("\r\n", $headers);

    $headerString .= "\r\nMessage-ID: <" . $threadToken . "@" . preg_replace('/[^A-Za-z0-9.-]/', '', ($_SERVER['SERVER_NAME'] ?? 'localhost')) . ">";

    return @mail($to, $subject, $body, $headerString);
}

function parseRecipientList($input) {
    $items = preg_split('/\s*,\s*/', trim((string) $input));
    $emails = [];

    foreach ($items as $item) {
        $email = trim($item);
        if ($email === '') {
            continue;
        }
        $emails[] = $email;
    }

    return array_values(array_unique($emails));
}

function readSmtpResponse($smtp) {
    $lines = [];
    while (($line = fgets($smtp, 1024)) !== false) {
        $lines[] = $line;
        if (isset($line[3]) && $line[3] !== '-') {
            break;
        }
    }
    return implode('', $lines);
}

function smtpExpect($smtp, $expectedPrefix) {
    $response = readSmtpResponse($smtp);
    return strpos($response, $expectedPrefix) === 0 ? $response : false;
}

function buildMimeMessage($to, $toName, $subject, $body, $threadToken, $attachments) {
    $domain = preg_replace('/[^A-Za-z0-9.-]/', '', ($_SERVER['SERVER_NAME'] ?? 'localhost'));
    $mixedBoundary = mimePartBoundary();
    $altBoundary = mimePartBoundary();

    $headers = [];
    $headers[] = 'To: ' . $toName . ' <' . $to . '>';
    $headers[] = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_EMAIL . '>';
    $headers[] = 'Subject: ' . $subject;
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Message-ID: <' . $threadToken . '@' . $domain . '>';
    $headers[] = 'X-Entity-Ref-ID: ' . $threadToken;
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    $message = implode("\r\n", $headers) . "\r\n";

    if (!empty($attachments)) {
        $message .= 'Content-Type: multipart/mixed; boundary="' . $mixedBoundary . '"' . "\r\n\r\n";
        $message .= '--' . $mixedBoundary . "\r\n";
        $message .= 'Content-Type: multipart/alternative; boundary="' . $altBoundary . '"' . "\r\n\r\n";
        $message .= '--' . $altBoundary . "\r\n";
        $message .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
        $message .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
        $message .= $body . "\r\n\r\n";
        $message .= '--' . $altBoundary . "--\r\n";

        foreach ($attachments as $attachment) {
            $message .= '--' . $mixedBoundary . "\r\n";
            $message .= 'Content-Type: ' . $attachment['mime'] . '; name="' . addslashes($attachment['name']) . '"' . "\r\n";
            $message .= 'Content-Transfer-Encoding: base64' . "\r\n";
            $message .= 'Content-Disposition: attachment; filename="' . addslashes($attachment['name']) . '"' . "\r\n\r\n";
            $message .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
        }

        $message .= '--' . $mixedBoundary . "--\r\n";
    } else {
        $message .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
        $message .= 'Content-Transfer-Encoding: 8bit' . "\r\n\r\n";
        $message .= $body;
    }

    return $message;
}

function sendViaSMTP($to, $toName, $subject, $body, $threadToken, $attachments = []) {
    $smtp = @fsockopen(SMTP_HOST, SMTP_PORT, $errno, $errstr, 15);
    if (!$smtp) {
        if (DEBUG_MODE) {
            error_log("SMTP connection failed: {$errno} - {$errstr}");
        }
        return false;
    }

    try {
        if (!smtpExpect($smtp, '220')) {
            if (DEBUG_MODE) {
                error_log('SMTP greeting rejected.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
        if (!smtpExpect($smtp, '250')) {
            if (DEBUG_MODE) {
                error_log('SMTP EHLO failed.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "STARTTLS\r\n");
        if (!smtpExpect($smtp, '220')) {
            if (DEBUG_MODE) {
                error_log('SMTP STARTTLS rejected.');
            }
            fclose($smtp);
            return false;
        }

        if (!stream_socket_enable_crypto($smtp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            if (DEBUG_MODE) {
                error_log('SMTP TLS negotiation failed.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
        if (!smtpExpect($smtp, '250')) {
            if (DEBUG_MODE) {
                error_log('SMTP post-TLS EHLO failed.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "AUTH LOGIN\r\n");
        if (!smtpExpect($smtp, '334')) {
            if (DEBUG_MODE) {
                error_log('SMTP AUTH LOGIN rejected.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, base64_encode(SMTP_USER) . "\r\n");
        if (!smtpExpect($smtp, '334')) {
            if (DEBUG_MODE) {
                error_log('SMTP username rejected.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, base64_encode(SMTP_PASS) . "\r\n");
        if (!smtpExpect($smtp, '235')) {
            if (DEBUG_MODE) {
                error_log('SMTP password rejected.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "MAIL FROM:<" . SMTP_FROM_EMAIL . ">\r\n");
        if (!smtpExpect($smtp, '250')) {
            if (DEBUG_MODE) {
                error_log('SMTP MAIL FROM rejected.');
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "RCPT TO:<" . $to . ">\r\n");
        $rcptResponse = readSmtpResponse($smtp);
        if (strpos($rcptResponse, '250') !== 0 && strpos($rcptResponse, '251') !== 0) {
            if (DEBUG_MODE) {
                error_log('SMTP RCPT TO rejected: ' . $rcptResponse);
            }
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "DATA\r\n");
        if (!smtpExpect($smtp, '354')) {
            if (DEBUG_MODE) {
                error_log('SMTP DATA rejected.');
            }
            fclose($smtp);
            return false;
        }

        $message = buildMimeMessage($to, $toName, $subject, $body, $threadToken, $attachments);
        $message = preg_replace("/\r\n\./", "\r\n..", $message);

        fwrite($smtp, $message . "\r\n.\r\n");
        if (!smtpExpect($smtp, '250')) {
            if (DEBUG_MODE) {
                error_log('SMTP message rejected.');
            }
            fwrite($smtp, "QUIT\r\n");
            fclose($smtp);
            return false;
        }

        fwrite($smtp, "QUIT\r\n");
        fclose($smtp);
        return true;
    } catch (Throwable $e) {
        if (DEBUG_MODE) {
            error_log('SMTP error: ' . $e->getMessage());
        }
        fclose($smtp);
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Invalid request method');
}

$recipientEmailRaw = sanitizeText($_POST['recipientEmail'] ?? '');
$recipientName = sanitizeText($_POST['recipientName'] ?? '');
$emailSubject = sanitizeText($_POST['emailSubject'] ?? '');
$template = sanitizeText($_POST['templateSelect'] ?? '');
$bulkMode = !empty($_POST['bulkMode']) && $_POST['bulkMode'] !== '0';

$allowedTemplates = ['template1', 'template2', 'template3', 'certificate_completion', 'sop_lor_preparation', 'cv_submission', 'processing_fee_receipt', 'unicef_learning_activation', 'publication_initiative', 'book_publication_offer', 'yoga_session_completion'];

if ($recipientEmailRaw === '' || (!$bulkMode && ($recipientName === '' || $emailSubject === '' || $template === ''))) {
    respond(400, false, 'Missing required fields');
}

$recipientEmails = $bulkMode ? parseRecipientList($recipientEmailRaw) : [$recipientEmailRaw];

if (empty($recipientEmails)) {
    respond(400, false, 'Invalid email address');
}

foreach ($recipientEmails as $email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(400, false, 'Invalid email address: ' . $email);
    }
}

$rootTemplates = ['template1', 'template2', 'template3'];
try {
    $attachments = collectAttachments($_FILES['attachments'] ?? []);
} catch (Throwable $e) {
    if (DEBUG_MODE) {
        error_log('Attachment error: ' . $e->getMessage());
    }
    respond(400, false, MSG_ATTACHMENT_ERROR);
}

if ($bulkMode) {
    $templateFiles = listEmailTemplateFiles();
    if (empty($templateFiles)) {
        respond(500, false, 'No email templates found in email_templates folder.');
    }

    $sent = 0;
    $failed = [];

    foreach ($recipientEmails as $recipientEmail) {
        foreach ($templateFiles as $templateFile) {
            $templateName = getTemplateNameFromPath($templateFile);
            $templateBody = file_get_contents($templateFile);
            if ($templateBody === false) {
                $failed[] = $recipientEmail . ' :: ' . $templateName;
                continue;
            }

            $emailBody = renderTemplateBody($templateBody, $_POST);
            $templateAttachments = getTemplateAttachments($templateName);
            $finalAttachments = !empty($templateAttachments) ? array_merge($templateAttachments, $attachments) : $attachments;
            $subject = ucwords(str_replace(['_', '-'], ' ', $templateName));

            if (sendEmail($recipientEmail, $recipientEmail, $subject, $emailBody, $finalAttachments)) {
                $sent++;
            } else {
                $failed[] = $recipientEmail . ' :: ' . $templateName;
            }
        }
    }

    if ($sent > 0 && empty($failed)) {
        respond(200, true, MSG_SUCCESS, ['total_sent' => $sent]);
    }

    if ($sent > 0 && !empty($failed)) {
        respond(207, false, 'Bulk send completed with some failures.', [
            'total_sent' => $sent,
            'failed_items' => $failed,
        ]);
    }

    respond(500, false, MSG_ERROR);
}

if (!in_array($template, $allowedTemplates, true)) {
    respond(400, false, 'Template not found');
}

$templatePath = in_array($template, $rootTemplates, true)
    ? TEMPLATE_DIR . $template . '.html'
    : TEMPLATE_DIR . 'email_templates' . DIRECTORY_SEPARATOR . $template . '.html';
if (!is_file($templatePath)) {
    respond(500, false, 'Template file is missing');
}

$templateBody = file_get_contents($templatePath);
if ($templateBody === false) {
    respond(500, false, 'Unable to load template');
}

$emailBody = renderTemplateBody($templateBody, $_POST);

$templateAttachments = getTemplateAttachments($template);
if (!empty($templateAttachments)) {
    $attachments = array_merge($templateAttachments, $attachments);
}

if (sendEmail($recipientEmailRaw, $recipientName, $emailSubject, $emailBody, $attachments)) {
    respond(200, true, MSG_SUCCESS);
}

respond(500, false, MSG_ERROR);
