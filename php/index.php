<?php

session_start();

$fileNameOne = "latogato_" . date("Y-m-d") . ".txt";
$fileNameTwo = "letoltes_" . date("Y-m-d") . ".txt";

if (file_exists($fileNameOne)) {
    $numberOfVisitors = filesize($fileNameOne);
} else {
    $numberOfVisitors = 0;
}

if (file_exists($fileNameTwo)) {
    $numberOfDownloads = filesize($fileNameTwo);
} else {
    $numberOfDownloads = 0;
}

$numberOfDownloads++;
file_put_contents($fileNameTwo, "x", FILE_APPEND);

if (!isset($_SESSION["visited"])) {
    $numberOfVisitors++;
    $numberOfVisitors = file_put_contents($fileNameOne, "x", FILE_APPEND);
    $_SESSION["valami"] = 1;
}

print "Mai látogatók száma: " . $numberOfVisitors . "<br>";
print "Mai letöltesek száma: " . $numberOfDownloads;

ini_set('display_errors', 1);
error_reporting(E_ALL);

?>
