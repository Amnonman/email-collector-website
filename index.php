<?php
$csv_file = 'emails.csv';
$email_count = 0;

if (file_exists($csv_file)) {
    $email_count = count(file($csv_file));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = fopen($csv_file, 'a');
        fputcsv($file, [$email]);
        fclose($file);
        $email_count++;
        echo json_encode(['success' => true, 'count' => $email_count]);
        exit;
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Collector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Subscribe to Our Newsletter</h1>
        <form id="email-form">
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </form>
        <p id="message"></p>
        <p>Total subscribers: <span id="email-count"><?php echo $email_count; ?></span></p>
    </div>
    <script src="script.js"></script>
</body>
</html>