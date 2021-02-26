<?php

//POST Plaque d'immatriculation

if(isset($_POST['numero'])) {
    $name = htmlspecialchars($_POST["numero"]);
    if (!preg_match('/^[a-np-z]{2}-[0-9]{3}-[a-np-z]{2}$/i',$name)) {
        $nameErr = "Format non valide";
      } else {
        $nameErr = "Format valide";
      }
      echo $nameErr;
}

//POST email

if (isset($_POST['email'])) {
    $email = htmlspecialchars($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Format non valide";
    } else {
        $emailErr = "Format valide";
    }
    echo $emailErr;
}
