<?php session_start(); ?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CAPTCHA Verification</title>
</head>
<body>
    <main class="container">
        <h2>CAPTCHA kép készítése</h2>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $user_input = $_POST['captcha_input'];
            if ($user_input == $_SESSION['captcha_code']) {
                echo '<p style="color: green;">Helyes kód!</p>';
            } else {
                echo '<p style="color: red;">Hibás kód, próbáld újra!</p>';
            }
        }
        ?>

        <form method="post">
            <div id="captcha_container">
                <img src="captcha.php" id="captcha_image" alt="CAPTCHA Image">
                <button type="button" onclick="reloadCaptcha()">Frissítés</button>
            </div>
            <label for="captcha_input">Kód:</label>
            <input type="text" name="captcha_input" id="captcha_input" required>
            <br><br>
            <button type="submit">Kód ellenőrzése</button>
        </form>
    </main>

    <script>
        function reloadCaptcha() {
            document.getElementById('captcha_image').src = 'captcha.php?' + Date.now();
        }
    </script>
</body>
</html>
