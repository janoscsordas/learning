<?php
session_start();

// Create the CAPTCHA code
$captcha_code = '';
$characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
$length = strlen($characters);
for ($i = 0; $i < 6; $i++) {
    $captcha_code .= $characters[rand(0, $length - 1)];
}

// Store the CAPTCHA code in session
$_SESSION['captcha_code'] = $captcha_code;

// Create the CAPTCHA image
$image = imagecreatetruecolor(150, 50);
$bg_color = imagecolorallocate($image, 255, 255, 255); // White background
$text_color = imagecolorallocate($image, 0, 0, 0);     // Black text
$line_color = imagecolorallocate($image, 64, 64, 64);  // Gray lines

imagefilledrectangle($image, 0, 0, 150, 50, $bg_color);

// Add some lines to make it harder to read
for ($i = 0; $i < 6; $i++) {
    imageline($image, 0, rand() % 50, 150, rand() % 50, $line_color);
}

// Use built-in font for testing
imagestring($image, 5, 10, 15, $captcha_code, $text_color);

// Send the image to the browser
header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);
?>
