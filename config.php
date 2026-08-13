<?php
/**
 * Email System Configuration
 * Update SMTP credentials here later.
 */

// SMTP Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'info@edudag.com');
define('SMTP_PASS', 'wpty blwv aznd gqhj');
define('SMTP_FROM_EMAIL', 'info@edudag.com');
define('SMTP_FROM_NAME', 'EduDAG Team');

// Mailer access protection
define('MAILER_PASSWORD', 'Shubham@2026');

// Website Configuration
define('SITE_NAME', 'EduDAG Email System');
define('SITE_URL', 'https://mailer.excelix.in');

// Templates are stored in the project root for this setup.
define('TEMPLATE_DIR', __DIR__ . DIRECTORY_SEPARATOR);
define('DOCS_DIR', __DIR__ . DIRECTORY_SEPARATOR . 'docs' . DIRECTORY_SEPARATOR);

// Enable/Disable Debug Mode
define('DEBUG_MODE', true);

// Prefer SMTP delivery. Keep the local mail() fallback disabled unless
// you explicitly need to use the server's mail transfer agent.
define('USE_MAIL_FALLBACK', false);

// Success/Error Messages
define('MSG_SUCCESS', 'Email sent successfully!');
define('MSG_ERROR', 'Failed to send email. Please try again.');
define('MSG_AUTH_ERROR', 'Invalid password.');
define('MSG_ATTACHMENT_ERROR', 'One or more attachments could not be processed.');
define('MAX_ATTACHMENT_BYTES', 10485760);
