<?php
session_start();
if (empty($_SESSION['mailer_authenticated'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduDAG Email System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.snow.css" rel="stylesheet">
    <style>
        :root {
            --edudag-red: #c62828;
            --edudag-red-dark: #8e1b1b;
            --edudag-black: #111111;
            --edudag-cream: #f8f5f0;
            --edudag-border: #e5d9d0;
            --edudag-text: #1f1f1f;
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--edudag-text);
            background:
                radial-gradient(circle at top left, rgba(198, 40, 40, 0.10), transparent 30%),
                radial-gradient(circle at bottom right, rgba(17, 17, 17, 0.08), transparent 35%),
                linear-gradient(180deg, #fffdfb 0%, #f4ede7 100%);
        }

        .brand-panel {
            background: linear-gradient(135deg, rgba(17, 17, 17, 0.96), rgba(198, 40, 40, 0.96));
            box-shadow: 0 18px 60px rgba(17, 17, 17, 0.22);
        }

        .card-shell {
            box-shadow: 0 20px 60px rgba(17, 17, 17, 0.12);
            border: 1px solid rgba(17, 17, 17, 0.08);
            backdrop-filter: blur(12px);
        }

        .field-label {
            color: #3d342d;
        }

        .soft-input {
            border-color: var(--edudag-border);
            background: rgba(255, 255, 255, 0.92);
        }

        .soft-input:focus {
            border-color: var(--edudag-red);
            box-shadow: 0 0 0 4px rgba(198, 40, 40, 0.10);
        }

        .rich-editor {
            min-height: 260px;
            background: #fff;
            border: 1px solid var(--edudag-border);
            border-radius: 18px;
        }

        .rich-editor .ql-toolbar {
            border: 0;
            border-bottom: 1px solid var(--edudag-border);
            border-top-left-radius: 18px;
            border-top-right-radius: 18px;
            background: #fff;
        }

        .rich-editor .ql-container {
            border: 0;
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
        }

        .rich-editor .ql-editor {
            min-height: 200px;
            line-height: 1.6;
        }

        .preview-frame {
            width: 100%;
            max-width: 380px;
            height: 920px;
            border: 1px solid var(--edudag-border);
            border-radius: 18px;
            background: #fff;
            display: block;
            margin: 0 auto;
        }

        .glow-button {
            transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
        }

        .glow-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 14px 30px rgba(17, 17, 17, 0.16);
        }

        .section-chip {
            background: rgba(198, 40, 40, 0.10);
            color: var(--edudag-red-dark);
        }

        .template-badge {
            background: rgba(17, 17, 17, 0.08);
            color: #2d2620;
        }

        .fade-up {
            animation: fadeUp 420ms ease both;
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .dropzone-dragover {
            border-color: var(--edudag-red) !important;
            background-color: rgba(198, 40, 40, 0.04) !important;
            transform: scale(1.005);
            box-shadow: 0 10px 25px -5px rgba(198, 40, 40, 0.1);
        }
    </style>
</head>
<body class="min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div class="brand-panel rounded-[28px] p-6 sm:p-8 text-white overflow-hidden relative">
            <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_34%)]"></div>
            <div class="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div class="flex items-center gap-4">
                    <img src="images/logo.png" alt="EduDAG Logo" class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 object-contain shadow-xl">
                    <div>
                        <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight">Email Template Builder</h1>
                        <p class="text-white/80 mt-2 max-w-2xl">Fill the form, preview the actual email, and send a polished MBA admission message with a consistent EduDAG brand theme.</p>
                    </div>
                </div>
                <div class="flex shrink-0">
                    <a href="auth.php?action=logout" class="bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-5 rounded-xl transition border border-white/20 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Logout
                    </a>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 mt-6">
            <div class="card-shell bg-white/95 rounded-[28px] overflow-hidden fade-up">
                <div id="messageContainer"></div>
                <form id="emailForm" method="POST" enctype="multipart/form-data" class="p-6 sm:p-8 space-y-5">
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <h2 class="text-2xl font-bold text-[var(--edudag-black)]">Compose Email</h2>
                            <p class="text-sm text-gray-500 mt-1">Choose a template and fill only the visible fields.</p>
                        </div>
                        <div class="hidden sm:flex items-center gap-2 template-badge px-4 py-2 rounded-full text-sm font-semibold">
                            <span class="w-2.5 h-2.5 rounded-full bg-[var(--edudag-red)]"></span>
                            Ready to preview
                        </div>
                    </div>

                    <div>
                        <label for="recipientEmail" class="block text-sm font-semibold field-label mb-2">Recipient Email</label>
                        <input type="text" id="recipientEmail" name="recipientEmail" placeholder="client@example.com, student2@example.com" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition" required>
                        <p class="mt-2 text-xs text-gray-500">For bulk onboarding, enable bulk mode and paste emails separated by commas.</p>
                    </div>

                    <div class="flex items-center gap-3 bg-[rgba(198,40,40,0.06)] border border-[var(--edudag-border)] rounded-2xl px-4 py-3">
                        <input type="checkbox" id="bulkMode" name="bulkMode" value="1" class="h-4 w-4 rounded border-gray-300 text-[var(--edudag-red)] focus:ring-[var(--edudag-red)]">
                        <label for="bulkMode" class="text-sm font-semibold text-[var(--edudag-black)]">Bulk onboarding sender</label>
                    </div>

                    <div id="recipientNameWrap">
                        <label for="recipientName" class="block text-sm font-semibold field-label mb-2">Recipient Name</label>
                        <input type="text" id="recipientName" name="recipientName" placeholder="Jagrav" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition" required>
                    </div>

                    <div id="emailSubjectWrap">
                        <label for="emailSubject" class="block text-sm font-semibold field-label mb-2">Email Subject</label>
                        <input type="text" id="emailSubject" name="emailSubject" placeholder="Subject line" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition" required>
                    </div>

                    <div id="templateSelectWrap">
                        <label for="templateSelect" class="block text-sm font-semibold field-label mb-2">Select Template</label>
                        <select id="templateSelect" name="templateSelect" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition bg-white" required>
                            <option value="">-- Choose a Template --</option>
                            <option value="template1">Admission Process</option>
                            <option value="template2">Follow-up Reminder</option>
                            <option value="template3">Custom Template</option>
                            <option value="certificate_completion">Certificate Completion</option>
                            <option value="sop_lor_preparation">SOP and LOR Preparation</option>
                            <option value="cv_submission">CV Submission</option>
                            <option value="processing_fee_receipt">Processing Fee Receipt</option>
                            <option value="unicef_learning_activation">UNICEF Learning Activation</option>
                            <option value="publication_initiative">Publication Initiative</option>
                            <option value="book_publication_offer">Book Publication Offer</option>
                            <option value="yoga_session_completion">Yoga Session Completion</option>
                        </select>
                    </div>

                    <div id="dynamicFieldsContainer" class="hidden bg-[var(--edudag-cream)] border border-[var(--edudag-border)] rounded-[24px] p-4 sm:p-5">
                        <div class="flex items-center justify-between gap-3 mb-4">
                            <h3 class="font-bold text-[var(--edudag-black)]">Template Variables</h3>
                            <span id="templateHint" class="text-xs font-semibold px-3 py-1 rounded-full bg-white text-gray-600 border border-[var(--edudag-border)]"></span>
                        </div>
                        <div id="dynamicFields" class="space-y-4"></div>
                    </div>

                    <div class="space-y-3">
                        <label class="block text-sm font-semibold field-label">Attachments</label>
                        <div id="dropzone" class="border-2 border-dashed border-[var(--edudag-border)] hover:border-[var(--edudag-red)] rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 bg-white/50 hover:bg-white flex flex-col items-center justify-center min-h-[140px] group relative overflow-hidden">
                            <input type="file" id="attachments" name="attachments[]" multiple class="hidden">
                            
                            <div class="flex flex-col items-center space-y-3">
                                <div class="p-3 bg-red-50 group-hover:bg-red-100 text-[var(--edudag-red)] rounded-full transition-colors duration-200">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-[var(--edudag-black)]">Drag &amp; drop files here or <span class="text-[var(--edudag-red)] underline">browse</span></p>
                                    <p class="text-xs text-gray-500 mt-1">Supports PDF, Documents, Images, etc. up to 10MB each.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="fileList" class="space-y-2 max-h-[220px] overflow-y-auto pr-1 hidden">
                            <!-- Rendered dynamically via JS -->
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <button type="button" id="previewButton" class="glow-button bg-[var(--edudag-black)] hover:bg-black text-white font-bold py-3.5 px-6 rounded-2xl transition">
                            Preview Email
                        </button>
                        <button type="submit" class="glow-button bg-[var(--edudag-red)] hover:bg-[var(--edudag-red-dark)] text-white font-bold py-3.5 px-6 rounded-2xl transition">
                            Send Email
                        </button>
                    </div>
                </form>
            </div>

            <div class="card-shell bg-white/95 rounded-[28px] overflow-hidden fade-up">
                <div class="p-6 sm:p-8 border-b border-[var(--edudag-border)]">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h2 class="text-2xl font-bold text-[var(--edudag-black)]">Live Preview</h2>
                            <p class="text-sm text-gray-500 mt-1">This renders the exact email HTML before sending.</p>
                        </div>
                        <div class="text-sm font-semibold text-[var(--edudag-red-dark)] bg-[rgba(198,40,40,0.08)] px-4 py-2 rounded-full">
                            600px email canvas
                        </div>
                    </div>
                </div>

                <div class="p-4 sm:p-6">
                    <div class="mb-4 flex items-center justify-between gap-3">
                        <div class="text-sm text-gray-600" id="previewStatus">Select a template to generate the preview.</div>
                        <button type="button" id="refreshButton" class="text-sm font-semibold text-[var(--edudag-red-dark)] hover:text-[var(--edudag-red)]">
                            Refresh
                        </button>
                    </div>
                    <iframe id="previewFrame" class="preview-frame" title="Email Preview" sandbox=""></iframe>
                </div>
            </div>
        </div>

    <div class="mt-6 text-center text-sm text-gray-600">
            Make sure SMTP settings are updated later in <span class="font-semibold">config.php</span>. The preview and template editor work independently of SMTP.
        </div>
    </div>

    <div id="bulkConfirmModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 px-4">
        <div class="w-full max-w-2xl rounded-[28px] bg-white shadow-2xl overflow-hidden border border-[var(--edudag-border)]">
            <div class="p-6 sm:p-8 border-b border-[var(--edudag-border)]">
                <h3 class="text-2xl font-bold text-[var(--edudag-black)]">Confirm Bulk Send</h3>
                <p class="text-sm text-gray-500 mt-1">Review the email list before we send all template mails one by one.</p>
            </div>
            <div class="p-6 sm:p-8 space-y-4">
                <div class="space-y-2">
                    <div class="flex items-center justify-between gap-3 text-sm">
                        <span class="font-semibold text-[var(--edudag-black)]">Progress</span>
                        <span id="bulkProgressText" class="text-gray-500">0 / 0</span>
                    </div>
                    <div class="h-3 w-full rounded-full bg-[var(--edudag-cream)] overflow-hidden border border-[var(--edudag-border)]">
                        <div id="bulkProgressBar" class="h-full w-0 bg-[var(--edudag-red)] transition-all duration-300"></div>
                    </div>
                </div>
                <div class="max-h-[320px] overflow-y-auto rounded-2xl border border-[var(--edudag-border)] bg-[var(--edudag-cream)] p-4">
                    <ul id="bulkConfirmList" class="space-y-2 text-sm text-[var(--edudag-black)]"></ul>
                </div>
            </div>
            <div class="p-6 sm:p-8 border-t border-[var(--edudag-border)] flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button type="button" id="bulkCancelButton" class="px-5 py-3 rounded-2xl border border-[var(--edudag-border)] text-[var(--edudag-black)] font-semibold hover:bg-gray-50 transition">Cancel</button>
                <button type="button" id="bulkConfirmButton" class="px-5 py-3 rounded-2xl bg-[var(--edudag-red)] text-white font-semibold hover:bg-[var(--edudag-red-dark)] transition">Send Now</button>
                <button type="button" id="bulkCloseButton" class="hidden px-5 py-3 rounded-2xl bg-[var(--edudag-black)] text-white font-semibold hover:bg-black transition">Close</button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.min.js"></script>
    <script src="app.js?v=2" defer></script>
</body>
</html>
