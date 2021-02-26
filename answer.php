<?php

if (isset($_POST['email'])) {
    $email = htmlspecialchars($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Format non valide";
    } else {
        $emailErr = "Format valide";
    }
    echo $emailErr;
}
