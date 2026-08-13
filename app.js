const templates = {
    template1: {
        title: 'Admission Process Initiation',
        subject: 'Admission Process Initiation - EduDAG Support for Profile Based MBA Applications',
        hint: 'Use one college per line for a clean bullet list.',
        fields: {
            client_name: { label: 'Client Name', type: 'text', placeholder: 'Client Name' },
            sme_name: { label: 'SME Name', type: 'text', placeholder: 'SME Name' },
            audit_fee: { label: 'Audit & Verification Fee', type: 'text', placeholder: '5000' },
            profile_fee: { label: 'Profile Assistance Fee', type: 'text', placeholder: '33000' },
            service_fee: { label: 'Service Fee', type: 'text', placeholder: '200000' },
            college_list: { label: 'College List', type: 'textarea', placeholder: 'GREAT LAKES\nSDA BOCCONI\nBITSOM\nISB' }
        }
    },
    template2: {
        title: 'Admission Follow-up',
        subject: 'Quick Follow-up: Your EduDAG Admission Process Next Steps',
        hint: 'Direct follow-up for Template 1.',
        fields: {
            client_name: { label: 'Client Name', type: 'text', placeholder: 'Client Name' },
            sme_name: { label: 'SME Name', type: 'text', placeholder: 'SME Name' },
            last_communication: { label: 'Last Communication Date', type: 'text', placeholder: '22 June 2026' },
            pending_action: { label: 'Pending Action Required', type: 'text', placeholder: 'Confirm your selected colleges and share the remaining documents' }
        }
    },
    template3: {
        title: 'Custom Template',
        subject: 'EduDAG Update',
        hint: 'Write your custom email content.',
        fields: {
            custom_header_title: { label: 'Header Heading', type: 'text', placeholder: 'Custom Message' },
            custom_header_text: { label: 'Header Text', type: 'text', placeholder: 'Header and footer stay fixed, content is customizable' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write your custom message here. It will appear in the middle of the email.' }
        }
    },
    certificate_completion: {
        title: 'Certificate Completion',
        subject: 'Certificate of Completion - EduDAG',
        hint: 'Use this for course or program completion updates.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Certificate of Completion' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Congratulations on successfully completing the program' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the certificate message here.' }
        },
        defaults: {
            custom_header_title: 'Certificate of Completion',
            custom_header_text: 'Congratulations on successfully completing the program',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p><strong>Greetings from EduDAG!</strong></p>
                <p>Congratulations on successfully completing the <strong>Yoga Certification Program</strong>!</p>
                <p>Please find your <strong>Certificate of Completion</strong> attached to this email. Your dedication and commitment to the program are truly appreciated, and we hope this achievement contributes to your personal and professional growth.</p>
                <p>We wish you continued success in all your future endeavors.</p>
                <p>Warm regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    },
    sop_lor_preparation: {
        title: 'SOP and LOR Preparation',
        subject: 'SOP and LOR Preparation Guidelines - EduDAG',
        hint: 'Use this for SOP, essay, and LOR preparation instructions.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'SOP and LOR Guidance' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Please prepare your SOP, essay, and LOR documents' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the SOP/LOR guidance here.' }
        },
        defaults: {
            custom_header_title: 'SOP and LOR Preparation',
            custom_header_text: 'Please prepare your SOP, essay, and LOR documents',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>We hope you are doing well.</p>
                <p>As an important step in your Master's application journey, you are requested to prepare your <strong>1 Statement of Purpose (SOP)/Essay</strong> and arrange <strong>2 Letters of Recommendation (LOR)</strong> using the attached sample formats and guidelines.</p>
                <p>A well-crafted SOP plays a crucial role in strengthening your application and significantly enhances your chances of securing admission. We encourage you to write an authentic and compelling SOP that truly reflects your academic journey, professional experiences, career aspirations, and motivation for pursuing your chosen program.</p>
                <p><strong>SOP Writing Guidelines</strong></p>
                <p>Maintain an ideal word count of 500-1000 words unless the university specifies otherwise.<br>
                Ensure your SOP is 100% original. Avoid plagiarism or copying content from the internet.<br>
                Organize your ideas clearly and maintain a logical flow throughout the document.<br>
                Follow the recommended structure provided in the attached guidelines.</p>
                <p><strong>Recommended SOP Structure</strong></p>
                <p>1. Introduction<br>2. Academic Background &amp; Achievements<br>3. Professional Experience<br>4. Why This Course?<br>5. Career Goals &amp; Conclusion</p>
                <p>Please use the attached documents only as a reference while preparing your own personalized SOP and 2 LORs.</p>
                <p>If you need any guidance during the drafting process, our team is always happy to assist you.</p>
                <p>Warm regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    },
    cv_submission: {
        title: 'CV Submission',
        subject: 'Updated CV Submission Request - EduDAG',
        hint: 'Use this to request a revised CV in the official format.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Updated CV Submission' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Please submit your updated CV in the official group' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the CV submission message here.' }
        },
        defaults: {
            custom_header_title: 'Updated CV Submission',
            custom_header_text: 'Please submit your updated CV in the official group',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>As part of the next stage of your profile development, you are requested to prepare your <strong>updated CV</strong> using the <strong>attached format</strong> only.</p>
                <p>Once your CV is completed, kindly submit it in our <strong>official WhatsApp group</strong> for review. Our team will evaluate your CV and provide feedback, if required, to ensure it meets professional and academic standards.</p>
                <p><strong>Please ensure your CV is submitted at the earliest to avoid any delays in the review process.</strong></p>
                <p>If you have any questions or need assistance while preparing your CV, feel free to contact us.</p>
                <p>Best regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    },
    processing_fee_receipt: {
        title: 'Processing Fee Receipt',
        subject: 'Processing Fee Receipt - EduDAG',
        hint: 'Use this to confirm auditing and verification fee payment.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Processing Fee Receipt' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Thank you for your payment' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the receipt message here.' }
        },
        defaults: {
            custom_header_title: 'Processing Fee Receipt',
            custom_header_text: 'Thank you for your payment',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>We would like to extend a warm welcome from EduDAG and thank you for your interest in our services. We are delighted to acknowledge your processing fee with us by paying the auditing and verification charges for the MBA/PGDM admission 2026-27 program.</p>
                <p>As a strategic consultant, we assure you that we are committed to providing the highest quality services in order to help you achieve your admission goals. We will work closely with you to ensure that you receive the best possible assistance and guidance throughout the admission process.</p>
                <p>This is to ensure that we can provide you with the best possible service and to cover the costs incurred in the process.</p>
                <p>Please treat this mail as a receipt for the same.</p>
                <p><strong>Your payment invoice has been attached to this email for your reference and records.</strong></p>
                <p>If you have any questions or concerns, please do not hesitate to contact us. We are always happy to assist you.</p>
                <p>Best Regards,<br><strong>EduDAG</strong></p>
            `
        }
    },
    unicef_learning_activation: {
        title: 'UNICEF Learning Activation',
        subject: 'UNICEF Learning Account Activation - EduDAG',
        hint: 'Use this for course activation and login details.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Learning Account Activated' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Your UNICEF learning account is ready' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the UNICEF activation message here.' }
        },
        defaults: {
            custom_header_title: 'Learning Account Activated',
            custom_header_text: 'Your UNICEF learning account is ready',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>We are pleased to inform you that your UNICEF learning account has been successfully activated, and you have been enrolled in the required courses.</p>
                <p>To begin, please confirm the activation email sent by <strong>UNICEF</strong> to your registered email address. Once your account is verified, you can access and start the following courses:</p>
                <p><a href="https://unccelearn.org/course/view.php?id=174&page=overview">https://unccelearn.org/course/view.php?id=174&page=overview</a><br>
                <a href="https://unccelearn.org/course/view.php?id=59&page=overview">https://unccelearn.org/course/view.php?id=59&page=overview</a><br>
                <a href="https://unccelearn.org/course/view.php?id=136&page=overview">https://unccelearn.org/course/view.php?id=136&page=overview</a><br>
                <a href="https://unccelearn.org/course/view.php?id=160&page=overview">https://unccelearn.org/course/view.php?id=160&page=overview</a></p>
                <p><strong>Login Credentials</strong><br>
                Username:<br>
                Password:</p>
                <p>Please log in using the above credentials and complete the courses.</p>
                <p>We wish you all the best for your learning journey!</p>
                <p>Kind regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    },
    publication_initiative: {
        title: 'Publication Initiative',
        subject: 'Publication Initiative - EduDAG',
        hint: 'Use this to invite a candidate to submit a research paper draft.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Publication Initiative' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Share your research paper draft' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the publication initiative message here.' }
        },
        defaults: {
            custom_header_title: 'Publication Initiative',
            custom_header_text: 'Share your research paper draft',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>Greetings from <strong>EduDAG</strong>!</p>
                <p>Thank you for expressing your interest in our upcoming <strong>Publication Initiative</strong>. We are excited to have you as a potential contributor to this publication.</p>
                <p>To move forward, please complete the following steps:</p>
                <p><strong>Choose Your Specialization</strong> - Select a subject that aligns with your academic background, professional experience, or area of interest.<br>
                <strong>Research a Topic</strong> - Identify an engaging and relevant topic within your chosen specialization.<br>
                <strong>Prepare Your Research Paper Draft</strong> - Write a well-structured <strong>2-3 page research paper</strong> presenting your ideas, analysis, and findings. Your research paper will be considered for inclusion as a chapter in the upcoming book publication.<br>
                <strong>Submission Deadline</strong> - Kindly submit your draft <strong>within 10 days</strong> from the date of this email.</p>
                <p>This initiative offers you the opportunity to become a <strong>published author</strong>, strengthen your academic and professional profile, and showcase your knowledge to a wider audience.</p>
                <p>If you need any guidance while preparing your research paper, our team will be happy to assist you.</p>
                <p>We look forward to receiving your submission and publishing your valuable contribution.</p>
                <p>Warm regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    },
    book_publication_offer: {
        title: 'Book Publication Offer',
        subject: 'Book Publication Opportunity - EduDAG',
        hint: 'Use this for the book publication invitation and content submission.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Book Publication Offer' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Publish a book under your name' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the book publication offer here.' }
        },
        defaults: {
            custom_header_title: 'Book Publication Offer',
            custom_header_text: 'Publish a book under your name',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>I hope you are doing well.</p>
                <p>We are excited to offer you an opportunity to <strong>publish a book</strong> under your name and strengthen your profile for your upcoming Master's admissions.</p>
                <p>You can create content on a topic related to your intended specialization, interests, experiences, or any subject you are passionate about. A published book can add significant value to your academic profile and highlight your creativity, knowledge, and commitment.</p>
                <p><em>Kindly find the attached Samples for your reference.</em></p>
                <p>If you are interested, share your book content draft in <strong>12-15 pages</strong> within the <strong>next 7-8 days</strong> so that we can begin the publication process.</p>
                <p>For any assistance, please feel free to contact your Case Manager.</p>
                <p>We look forward to helping you become a published author.</p>
                <p><strong>Warm Regards,<br>Team EduDAG</strong></p>
            `
        }
    },
    yoga_session_completion: {
        title: 'Yoga Session Completion',
        subject: 'Yoga Session Completion Required - EduDAG',
        hint: 'Use this for yoga session viewing and confirmation requests.',
        fields: {
            custom_header_title: { label: 'Header Title', type: 'text', placeholder: 'Yoga Session Completion' },
            custom_header_text: { label: 'Header Subtitle', type: 'text', placeholder: 'Please watch and complete the session' },
            custom_body_html: { label: 'Email Content', type: 'html-editor', placeholder: 'Write the yoga session message here.' }
        },
        defaults: {
            custom_header_title: 'Yoga Session Completion',
            custom_header_text: 'Please watch and complete the session',
            custom_body_html: `
                <p>Dear Candidate,</p>
                <p>I hope you are doing well.</p>
                <p>As part of your ongoing process, you are required to complete the <strong>Yoga Session</strong> by watching the recording provided below.</p>
                <p><strong>Yoga Session Recording:</strong><br>
                <a href="https://mega.nz/folder/JetEnT6a#Ags22qeXWcFKRrULrG6rSA">https://mega.nz/folder/JetEnT6a#Ags22qeXWcFKRrULrG6rSA</a></p>
                <p><strong>What you need to do:</strong><br>
                Watch and complete the entire yoga session.<br>
                Reply to this email confirming that you have successfully completed the session.</p>
                <p>Please note that <strong>your certificate will be processed only after we receive your confirmation email</strong>. Once your acknowledgment is received, we will notify the concerned team to initiate the certificate issuance process.</p>
                <p>If you have any questions or face any issues accessing the recording, please feel free to reach out.</p>
                <p>Thank you for your cooperation, and we look forward to your confirmation.</p>
                <p>Warm Regards,<br><strong>Team EduDAG</strong></p>
            `
        }
    }
};

const form = document.getElementById('emailForm');
const sendButton = document.getElementById('sendButton');
const templateSelect = document.getElementById('templateSelect');
const dynamicFieldsContainer = document.getElementById('dynamicFieldsContainer');
const dynamicFields = document.getElementById('dynamicFields');
const emailSubject = document.getElementById('emailSubject');
const emailSubjectWrap = document.getElementById('emailSubjectWrap');
const recipientName = document.getElementById('recipientName');
const recipientNameWrap = document.getElementById('recipientNameWrap');
const templateSelectWrap = document.getElementById('templateSelectWrap');
const previewFrame = document.getElementById('previewFrame');
const previewStatus = document.getElementById('previewStatus');
const templateHint = document.getElementById('templateHint');
const previewButton = document.getElementById('previewButton');
const refreshButton = document.getElementById('refreshButton');
const messageContainer = document.getElementById('messageContainer');
const attachmentsInput = document.getElementById('attachments');
const dropzone = document.getElementById('dropzone');
const fileList = document.getElementById('fileList');
const bulkMode = document.getElementById('bulkMode');
const bulkConfirmModal = document.getElementById('bulkConfirmModal');
const bulkConfirmList = document.getElementById('bulkConfirmList');
const bulkProgressBar = document.getElementById('bulkProgressBar');
const bulkProgressText = document.getElementById('bulkProgressText');
const bulkConfirmButton = document.getElementById('bulkConfirmButton');
const bulkCancelButton = document.getElementById('bulkCancelButton');
const bulkCloseButton = document.getElementById('bulkCloseButton');
const bulkConfirmTitle = bulkConfirmModal ? bulkConfirmModal.querySelector('h3') : null;
const bulkConfirmSubtitle = bulkConfirmModal ? bulkConfirmModal.querySelector('p') : null;

let logoDataUriPromise = null;
let customQuill = null;
let selectedFiles = [];
let pendingBulkSubmit = null;
let bulkOverlayEntries = [];

const bulkTemplateOrder = [
    'certificate_completion',
    'sop_lor_preparation',
    'cv_submission',
    'processing_fee_receipt',
    'unicef_learning_activation',
    'publication_initiative',
    'book_publication_offer',
    'yoga_session_completion'
];
let bulkInFlight = false;
let bulkTotalJobs = 0;
let bulkCompletedJobs = 0;

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function loadLogoDataUri() {
    if (!logoDataUriPromise) {
        logoDataUriPromise = fetch('images/logo.png')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Logo not found');
                }
                return response.blob();
            })
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            }))
            .catch(() => 'images/logo.png');
    }

    return logoDataUriPromise;
}

function getFieldValue(name) {
    const field = form.elements[name];
    return field ? field.value || '' : '';
}

function normalizeList(value) {
    return value
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => `<li>${escapeHtml(line)}</li>`)
        .join('');
}

function nl2br(value) {
    return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function buildTemplateData() {
    const selected = templateSelect.value;
    const template = templates[selected];
    const data = {};

    if (!template) return data;

    Object.keys(template.fields).forEach((key) => {
        data[key] = getFieldValue(key);
    });

    return data;
}

async function renderTemplateBody(templateName, data) {
    const logoSrc = await loadLogoDataUri();
    const rootTemplates = ['template1', 'template2', 'template3'];
    const templatePath = rootTemplates.includes(templateName)
        ? `${templateName}.html`
        : `email_templates/${templateName}.html`;

    return fetch(templatePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to load template file');
            }
            return response.text();
        })
        .then(html => {
            const replacements = {
                '{logo_src}': logoSrc,
                '{client_name}': escapeHtml(data.client_name || ''),
                '{sme_name}': escapeHtml(data.sme_name || ''),
                '{audit_fee}': escapeHtml(data.audit_fee || ''),
                '{profile_fee}': escapeHtml(data.profile_fee || ''),
                '{service_fee}': escapeHtml(data.service_fee || ''),
                '{last_communication}': escapeHtml(data.last_communication || ''),
                '{pending_action}': escapeHtml(data.pending_action || ''),
                '{college_name}': escapeHtml(data.college_name || ''),
                '{program_name}': escapeHtml(data.program_name || ''),
                '{joining_date}': escapeHtml(data.joining_date || ''),
                '{college_list}': normalizeList(data.college_list || ''),
                '{custom_header_title}': escapeHtml(data.custom_header_title || 'Custom Message'),
                '{custom_header_text}': escapeHtml(data.custom_header_text || 'Header and footer stay fixed, content is fully customizable'),
                '{custom_body_html}': data.custom_body_html || '',
                '{custom_body}': nl2br(data.custom_body_html || '')
            };

            return Object.entries(replacements).reduce((acc, [token, value]) => acc.split(token).join(value), html);
        });
}

function previewShell(title, message, color) {
    const accent = color === 'error' ? '#8e1b1b' : '#111111';
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        margin: 0;
                        font-family: Inter, Arial, sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        background: #faf7f4;
                        color: ${accent};
                    }
                    .box {
                        max-width: 340px;
                        padding: 24px;
                        text-align: center;
                    }
                    h3 { margin: 0 0 8px; }
                    p { margin: 0; color: #5b5148; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h3>${escapeHtml(title)}</h3>
                    <p>${escapeHtml(message)}</p>
                </div>
            </body>
        </html>`;
}

function renderPreview() {
    const selected = templateSelect.value;
    if (bulkMode.checked) {
        previewFrame.srcdoc = previewShell('Bulk mode', 'Preview is disabled in bulk onboarding mode.', 'neutral');
        previewStatus.textContent = 'Bulk onboarding mode is active.';
        return Promise.resolve();
    }
    if (!selected) {
        previewFrame.srcdoc = previewShell('Select a template', 'Your rendered email preview will appear here once the template is chosen.', 'neutral');
        previewStatus.textContent = 'Select a template to generate the preview.';
        return Promise.resolve();
    }

    const data = buildTemplateData();
    previewStatus.textContent = 'Rendering preview...';

    return renderTemplateBody(selected, data)
        .then(renderedHtml => {
            previewFrame.srcdoc = renderedHtml;
            previewStatus.textContent = `Preview updated from ${templates[selected].title}.`;
        })
        .catch(error => {
            previewFrame.srcdoc = previewShell('Preview failed', error.message, 'error');
            previewStatus.textContent = 'Preview could not be loaded.';
        });
}

function loadTemplateFields() {
    const selected = templateSelect.value;
    const template = templates[selected];
    const isCustomTemplate = !!template && Object.prototype.hasOwnProperty.call(template.fields, 'custom_body_html');
    const isBulk = bulkMode.checked;

    dynamicFields.innerHTML = '';
    customQuill = null;

    if (!template) {
        dynamicFieldsContainer.classList.add('hidden');
        emailSubject.value = '';
        templateHint.textContent = '';
        renderPreview();
        return;
    }

    if (isBulk) {
        dynamicFieldsContainer.classList.add('hidden');
        return;
    }

    dynamicFieldsContainer.classList.remove('hidden');
    emailSubject.value = template.subject;
    templateHint.textContent = template.hint;

    const containerTitle = dynamicFieldsContainer.querySelector('h3');
    if (containerTitle) {
        containerTitle.textContent = isCustomTemplate ? 'Custom Template' : 'Template Variables';
    }

    Object.entries(template.fields).forEach(([name, config]) => {
        const wrapper = document.createElement('div');

        if (config.type === 'html-editor') {
            wrapper.innerHTML = `
                <label for="${name}" class="block text-xs font-semibold text-gray-600 mb-2">${escapeHtml(config.label)}</label>
                <div id="customEditor" class="rich-editor"></div>
                <textarea id="${name}" name="${name}" class="hidden"></textarea>
            `;
        } else if (config.type === 'textarea') {
            const rows = isCustomTemplate ? 12 : 5;
            wrapper.innerHTML = `
                <label for="${name}" class="block text-xs font-semibold text-gray-600 mb-2">${escapeHtml(config.label)}</label>
                <textarea id="${name}" name="${name}" rows="${rows}" placeholder="${escapeHtml(config.placeholder)}" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition resize-y"></textarea>
            `;
        } else {
            wrapper.innerHTML = `
                <label for="${name}" class="block text-xs font-semibold text-gray-600 mb-2">${escapeHtml(config.label)}</label>
                <input type="text" id="${name}" name="${name}" placeholder="${escapeHtml(config.placeholder)}" class="soft-input w-full px-4 py-3 rounded-2xl border-2 outline-none transition">
            `;
        }

        dynamicFields.appendChild(wrapper);
    });

    if (template.defaults) {
        Object.entries(template.defaults).forEach(([name, value]) => {
            const field = document.getElementById(name);
            if (field && !field.value) {
                field.value = value.trim();
            }
        });
    }

    if (isCustomTemplate) {
        const editorEl = document.getElementById('customEditor');
        const hiddenInput = document.getElementById('custom_body_html');
        if (editorEl && hiddenInput && window.Quill) {
            customQuill = new Quill(editorEl, {
                theme: 'snow',
                placeholder: template.fields.custom_body_html.placeholder,
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ align: [] }],
                        ['link', 'blockquote', 'clean']
                    ]
                }
            });
            // Assigning root.innerHTML directly leaves Quill's internal Delta
            // model out of sync, so the content can get reset back to empty
            // on the next editor update. Route it through the clipboard API
            // so Quill registers the content properly.
            customQuill.clipboard.dangerouslyPasteHTML(hiddenInput.value || '<p><br></p>');
            hiddenInput.value = customQuill.root.innerHTML;
            customQuill.on('text-change', () => {
                hiddenInput.value = customQuill.root.innerHTML;
                renderPreview();
            });
        }

        const hiddenBody = document.getElementById('custom_body_html');
        if (hiddenBody && !hiddenBody.value) {
            hiddenBody.value = '<p><br></p>';
        }
    }

    renderPreview();
}

function showPreview() {
    if (bulkMode.checked) {
        alert('Preview is disabled in bulk onboarding mode.');
        return;
    }
    if (!templateSelect.value) {
        alert('Please select a template first.');
        return;
    }
    renderPreview();
}

function refreshPreview() {
    if (bulkMode.checked) {
        renderPreview();
        return;
    }
    renderPreview();
}

function showMessage(type, message) {
    const colorClasses = type === 'success'
        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
        : 'bg-red-50 text-red-800 border-red-200';
    const icon = type === 'success' ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12';

    messageContainer.innerHTML = `
        <div class="m-4 p-4 rounded-2xl border ${colorClasses}">
            <div class="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="mt-0.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="${icon}"></path>
                </svg>
                <div class="font-medium">${escapeHtml(message)}</div>
            </div>
        </div>
    `;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileIcon(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    
    if (ext === 'pdf') {
        return `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
        `;
    }
    
    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) {
        return `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
        `;
    }
    
    if (['doc', 'docx', 'txt', 'rtf', 'odt'].includes(ext)) {
        return `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
        `;
    }
    
    if (['xls', 'xlsx', 'csv'].includes(ext)) {
        return `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M8 11h8v10H8z"></path>
                <path d="M8 15h8"></path>
                <path d="M12 11v10"></path>
            </svg>
        `;
    }
    
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
    `;
}

function renderFileList() {
    if (selectedFiles.length === 0) {
        fileList.innerHTML = '';
        fileList.classList.add('hidden');
        return;
    }

    fileList.classList.remove('hidden');
    fileList.innerHTML = selectedFiles.map((file, index) => {
        return `
            <div class="flex items-center justify-between p-3 bg-white border border-[var(--edudag-border)] rounded-xl transition duration-200 hover:shadow-sm">
                <div class="flex items-center space-x-3 truncate">
                    <div class="p-2 bg-gray-50 rounded-lg shrink-0">
                        ${getFileIcon(file.name)}
                    </div>
                    <div class="truncate">
                        <p class="text-sm font-medium text-[var(--edudag-black)] truncate">${escapeHtml(file.name)}</p>
                        <p class="text-xs text-gray-400">${formatBytes(file.size)}</p>
                    </div>
                </div>
                <button type="button" onclick="removeSelectedFile(${index})" class="text-gray-400 hover:text-[var(--edudag-red)] p-1.5 rounded-lg hover:bg-[rgba(198,40,40,0.06)] transition-colors duration-150">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;
    }).join('');
}

window.removeSelectedFile = function(index) {
    selectedFiles.splice(index, 1);
    renderFileList();
};

function handleFilesSelected(files) {
    const maxSizeBytes = 10485760; // 10MB
    const rejectedFiles = [];
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > maxSizeBytes) {
            rejectedFiles.push(file.name);
            continue;
        }
        
        if (!selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
            selectedFiles.push(file);
        }
    }
    
    if (rejectedFiles.length > 0) {
        alert(`The following file(s) exceed the 10MB limit and were not added:\n${rejectedFiles.join('\n')}`);
    }
    
    renderFileList();
}

function parseRecipientEmails(value) {
    return String(value || '')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
        .filter((email, index, array) => array.indexOf(email) === index);
}

function buildTemplatePayload(templateName) {
    const template = templates[templateName];
    const payload = {};
    if (!template) return payload;

    Object.keys(template.fields || {}).forEach((fieldName) => {
        const field = template.defaults && template.defaults[fieldName]
            ? template.defaults[fieldName]
            : '';
        payload[fieldName] = typeof field === 'string' ? field.trim() : '';
    });

    return payload;
}

function showBulkConfirmModal(recipients) {
    if (!bulkConfirmModal || !bulkConfirmList) return;
    bulkConfirmList.innerHTML = recipients.map(email => `<li class="rounded-xl bg-white px-4 py-3 border border-[var(--edudag-border)] break-all">${escapeHtml(email)}</li>`).join('');
    if (bulkConfirmTitle) {
        bulkConfirmTitle.textContent = 'Confirm Bulk Send';
    }
    if (bulkConfirmSubtitle) {
        bulkConfirmSubtitle.textContent = 'Review the recipient list before we send all 8 templates to each email one by one.';
    }
    bulkConfirmModal.classList.remove('hidden');
    bulkConfirmModal.classList.add('flex');
}

function updateBulkConfirmModal(title, subtitle, entries) {
    if (bulkConfirmTitle) {
        bulkConfirmTitle.textContent = title;
    }
    if (bulkConfirmSubtitle) {
        bulkConfirmSubtitle.textContent = subtitle;
    }
    if (bulkConfirmList) {
        bulkConfirmList.innerHTML = entries.map(entry => `
            <li class="rounded-xl bg-white px-4 py-3 border border-[var(--edudag-border)] break-all flex items-center justify-between gap-3">
                <span>${escapeHtml(entry.label)}</span>
                <span class="text-xs font-semibold ${entry.stateClass || 'text-gray-500'}">${escapeHtml(entry.state)}</span>
            </li>
        `).join('');
    }
}

function setBulkProgress(completed, total) {
    bulkCompletedJobs = completed;
    bulkTotalJobs = total;
    if (bulkProgressText) {
        bulkProgressText.textContent = `${completed} / ${total}`;
    }
    if (bulkProgressBar) {
        const pct = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;
        bulkProgressBar.style.width = `${pct}%`;
    }
}

function hideBulkConfirmModal() {
    if (!bulkConfirmModal) return;
    bulkConfirmModal.classList.add('hidden');
    bulkConfirmModal.classList.remove('flex');
    pendingBulkSubmit = null;
}

function applyBulkModeState() {
    const isBulk = bulkMode.checked;

    if (recipientNameWrap && recipientName) {
        recipientNameWrap.classList.toggle('hidden', isBulk);
        recipientName.required = !isBulk;
    }
    if (emailSubjectWrap && emailSubject) {
        emailSubjectWrap.classList.toggle('hidden', isBulk);
        emailSubject.required = !isBulk;
    }
    if (templateSelectWrap && templateSelect) {
        templateSelectWrap.classList.toggle('hidden', isBulk);
        templateSelect.required = !isBulk;
    }
    if (bulkMode.checked) {
        dynamicFieldsContainer.classList.add('hidden');
    } else {
        loadTemplateFields();
    }
    renderPreview();
}

document.addEventListener('DOMContentLoaded', () => {
    if (!form || !templateSelect || !dynamicFieldsContainer || !dynamicFields || !emailSubject || !previewFrame || !previewStatus || !templateHint || !previewButton || !refreshButton || !messageContainer || !attachmentsInput || !dropzone || !fileList || !bulkMode || !bulkConfirmModal || !bulkConfirmList || !bulkConfirmButton || !bulkCancelButton || !bulkCloseButton) {
        console.error('Mailer UI failed to initialize: one or more required elements are missing.');
        return;
    }

    templateSelect.addEventListener('change', loadTemplateFields);
    previewButton.addEventListener('click', showPreview);
    refreshButton.addEventListener('click', refreshPreview);
    bulkMode.addEventListener('change', applyBulkModeState);
    bulkCancelButton.addEventListener('click', hideBulkConfirmModal);
    bulkCloseButton.addEventListener('click', hideBulkConfirmModal);
    bulkConfirmModal.addEventListener('click', (event) => {
        if (event.target === bulkConfirmModal) {
            hideBulkConfirmModal();
        }
    });

    form.addEventListener('input', function(event) {
        if (event.target && event.target.name) {
            renderPreview();
        }
    });

    // Dropzone click triggers native input click
    dropzone.addEventListener('click', () => {
        attachmentsInput.click();
    });

    // File selection via native input change
    attachmentsInput.addEventListener('change', (e) => {
        if (e.target.files) {
            handleFilesSelected(e.target.files);
        }
    });

    // Drag-and-drop Events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.add('dropzone-dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.remove('dropzone-dragover');
        }, false);
    });

    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files) {
            handleFilesSelected(files);
        }
    }, false);

    applyBulkModeState();

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        if (bulkInFlight) {
            return;
        }

        if (customQuill) {
            const hiddenInput = document.getElementById('custom_body_html');
            if (hiddenInput) {
                hiddenInput.value = customQuill.root.innerHTML;
            }
        }

        const isBulk = bulkMode.checked;
        const recipientField = document.getElementById('recipientEmail');
        const recipients = isBulk ? parseRecipientEmails(recipientField.value) : [recipientField.value.trim()].filter(Boolean);

        if (isBulk) {
            if (recipients.length === 0) {
                showMessage('error', 'Please enter at least one recipient email address.');
                return;
            }

            pendingBulkSubmit = async () => {
                await performBulkQueue(recipients);
            };
            showBulkConfirmModal(recipients);
            return;
        }

        await performSend(recipients, false);
    });

    bulkConfirmButton.addEventListener('click', async () => {
        if (pendingBulkSubmit) {
            const submit = pendingBulkSubmit;
            pendingBulkSubmit = null;
            await submit();
        }
    });

    renderPreview();
});

async function performSend(recipients, isBulk) {
    if (sendButton) sendButton.disabled = true;
    const formData = new FormData(form);

    formData.delete('attachments[]');
    selectedFiles.forEach(file => {
        formData.append('attachments[]', file);
    });

    formData.set('bulkMode', isBulk ? '1' : '0');
    formData.set('recipientEmail', isBulk ? recipients.join(',') : recipients[0] || '');
    if (isBulk) {
        formData.delete('recipientName');
        formData.delete('emailSubject');
        formData.delete('templateSelect');
    }

    try {
        const response = await fetch('send-email.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        const message = result.message + (result.total_sent ? ` (${result.total_sent} sent)` : '');
        showMessage(result.success ? 'success' : 'error', message);

        if (result.success) {
            form.reset();
            bulkMode.checked = false;
            attachmentsInput.value = '';
            selectedFiles = [];
            renderFileList();
            dynamicFields.innerHTML = '';
            dynamicFieldsContainer.classList.add('hidden');
            templateHint.textContent = '';
            previewStatus.textContent = 'Select a template to generate the preview.';
            previewFrame.srcdoc = '';
            applyBulkModeState();
        }
    } catch (error) {
        showMessage('error', 'An unexpected error occurred while sending.');
    } finally {
        if (sendButton) sendButton.disabled = false;
    }
}

async function performBulkQueue(recipients) {
    if (bulkInFlight) return;
    bulkInFlight = true;
    if (bulkConfirmButton) bulkConfirmButton.disabled = true;
    if (sendButton) sendButton.disabled = true;

    // Dedupe defensively so a single confirmed batch can never send more
    // than one copy of each template to any recipient.
    const uniqueRecipients = Array.from(new Set(recipients));
    const templatesToSend = bulkTemplateOrder.filter(name => templates[name]);
    const jobs = [];
    for (const recipient of uniqueRecipients) {
        for (const templateName of templatesToSend) {
            jobs.push({ recipient, templateName });
        }
    }
    recipients = uniqueRecipients;
    const totalJobs = jobs.length;
    let completed = 0;
    const failed = [];
    const recipientStates = Object.fromEntries(recipients.map(email => [email, 0]));

    showMessage('success', `Bulk send started for ${recipients.length} recipients and ${templatesToSend.length} templates each.`);

    bulkConfirmModal.classList.remove('hidden');
    bulkConfirmModal.classList.add('flex');
    if (bulkConfirmButton) bulkConfirmButton.classList.add('hidden');
    if (bulkCancelButton) bulkCancelButton.classList.add('hidden');
    if (bulkCloseButton) bulkCloseButton.classList.add('hidden');
    setBulkProgress(0, totalJobs);
    updateBulkConfirmModal(
        'Bulk Send In Progress',
        'Sending all 8 templates to each recipient.',
        recipients.map(email => ({
            label: email,
            state: 'Queued',
            stateClass: 'text-gray-400'
        }))
    );

    for (const job of jobs) {
        const { recipient, templateName } = job;
        const template = templates[templateName];
        const formData = new FormData();

        formData.append('recipientEmail', recipient);
        formData.append('recipientName', recipient);
        formData.append('emailSubject', template.subject || template.title || templateName);
        formData.append('templateSelect', templateName);
        formData.append('bulkMode', '0');

        const payload = buildTemplatePayload(templateName);
        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        selectedFiles.forEach(file => formData.append('attachments[]', file));

        updateBulkConfirmModal(
            'Bulk Send In Progress',
            `Sending ${template.title} to ${recipient}.`,
            recipients.map(email => ({
                label: email,
                state: recipientStates[email] >= templatesToSend.length ? `Done (${templatesToSend.length}/${templatesToSend.length})` : `${recipientStates[email]}/${templatesToSend.length} sent`,
                stateClass: recipientStates[email] >= templatesToSend.length ? 'text-emerald-600' : (email === recipient ? 'text-[var(--edudag-red)]' : 'text-gray-400')
            }))
        );

        try {
            const response = await fetch('send-email.php', { method: 'POST', body: formData });
            const result = await response.json();
            completed++;
            if (!result.success) {
                failed.push(`${recipient} :: ${templateName}`);
            }
        } catch (error) {
            completed++;
            failed.push(`${recipient} :: ${templateName}`);
        }

        recipientStates[recipient] += 1;
        setBulkProgress(completed, totalJobs);
        updateBulkConfirmModal(
            'Bulk Send In Progress',
            `Completed ${completed} of ${totalJobs}.`,
            recipients.map(email => ({
                label: email,
                state: recipientStates[email] >= templatesToSend.length ? `Done (${templatesToSend.length}/${templatesToSend.length})` : `${recipientStates[email]}/${templatesToSend.length} sent`,
                stateClass: recipientStates[email] >= templatesToSend.length ? 'text-emerald-600' : (email === recipient ? 'text-[var(--edudag-red)]' : 'text-gray-400')
            }))
        );
    }

    bulkInFlight = false;
    if (sendButton) sendButton.disabled = false;
    if (bulkConfirmTitle) bulkConfirmTitle.textContent = 'Bulk Send Complete';
    if (bulkConfirmSubtitle) bulkConfirmSubtitle.textContent = `Finished ${completed} sends across ${recipients.length} recipient(s).`;
    if (bulkConfirmButton) bulkConfirmButton.classList.add('hidden');
    if (bulkCancelButton) bulkCancelButton.classList.add('hidden');
    if (bulkCloseButton) bulkCloseButton.classList.remove('hidden');
    if (bulkConfirmButton) bulkConfirmButton.disabled = false;
    setBulkProgress(totalJobs, totalJobs);

    if (failed.length === 0) {
        showMessage('success', `Bulk send completed successfully. ${completed} emails sent.`);
    } else {
        showMessage('error', `Bulk send completed with ${failed.length} failures out of ${completed}.`);
    }
}
