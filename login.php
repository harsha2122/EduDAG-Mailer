<?php
session_start();
require_once 'config.php';
// If already logged in, redirect to index.php
if (!empty($_SESSION['mailer_authenticated'])) {
    header('Location: index.php');
    exit;
}
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    if ($password === MAILER_PASSWORD) {
        $_SESSION['mailer_authenticated'] = true;
        header('Location: index.php');
        exit;
    } else {
        $error = 'Invalid password. Please try again.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - EduDAG Email System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
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
        .card-shell {
            box-shadow: 0 20px 60px rgba(17, 17, 17, 0.12);
            border: 1px solid rgba(17, 17, 17, 0.08);
            backdrop-filter: blur(12px);
        }
        .soft-input {
            border-color: var(--edudag-border);
            background: rgba(255, 255, 255, 0.92);
        }
        .soft-input:focus {
            border-color: var(--edudag-red);
            box-shadow: 0 0 0 4px rgba(198, 40, 40, 0.10);
        }
        .glow-button {
            transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
        }
        .glow-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 14px 30px rgba(17, 17, 17, 0.16);
        }
        .fade-up {
            animation: fadeUp 420ms ease both;
        }
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full space-y-8 fade-up">
        <div class="card-shell bg-white/95 rounded-[28px] p-8 sm:p-10">
            <div class="flex flex-col items-center justify-center text-center">
                <img src="images/logo.png" alt="EduDAG Logo" class="w-20 h-20 rounded-2xl bg-white p-2 object-contain shadow-md mb-4 border border-[var(--edudag-border)]">
                <h2 class="text-3xl font-extrabold text-[var(--edudag-black)]">EduDAG Email System</h2>
                <p class="mt-2 text-sm text-gray-500">Please enter the password to gain access</p>
            </div>
            <?php if (!empty($error)): ?>
                <div class="mt-6 p-4 rounded-2xl border bg-red-50 text-red-800 border-red-200 text-sm flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="mt-0.5 shrink-0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div class="font-medium"><?php echo htmlspecialchars($error); ?></div>
                </div>
            <?php endif; ?>
            <form class="mt-6 space-y-6" action="login.php" method="POST">
                <div>
                <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>

                <div class="relative">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        class="soft-input w-full px-4 py-3 pr-12 rounded-2xl border-2 outline-none transition"
                        placeholder="••••••••">

                    <button
                        type="button"
                        id="togglePassword"
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">

                        👁️
                    </button>
                </div>
            </div>

            <script>
            document.getElementById("togglePassword").addEventListener("click", function () {

                const input = document.getElementById("password");

                if (input.type === "password") {
                    input.type = "text";
                    this.innerHTML = "🙈";
                } else {
                    input.type = "password";
                    this.innerHTML = "👁️";
                }

            });
            </script>
                <div>
                    <button type="submit" class="glow-button w-full bg-[var(--edudag-red)] hover:bg-[var(--edudag-red-dark)] text-white font-bold py-3.5 px-6 rounded-2xl transition">
                        Access System
                    </button>
                </div>
            </form>
        </div>
        
        <div class="text-center text-xs text-gray-500 mt-4">
            &copy; <?php echo date('Y'); ?> EduDAG. All rights reserved.
        </div>
    </div>
</body>
</html>
