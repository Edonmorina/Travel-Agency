<?php

$http_origin = $_SERVER['HTTP_ORIGIN'];

$allowed_domains = array(
  'http://localhost:3000',
  'https://edon-travel.netlify.app',
);

if (in_array($http_origin, $allowed_domains))
{  
    header("Access-Control-Allow-Origin: $http_origin");
}

if(isset($_POST["submit"])){

    // Grabbing the data
    $uid = $_POST["uid"];
    $pwd = $_POST["pwd"];

    // Instantiate SignupContr class
    include "../classes/dbh.classes.php";
    include "../classes/login.classes.php";
    include "../classes/login-contr.classes.php";
    $signup = new LoginContr($uid, $pwd);
    
    // Running error handlers and user signup
    $signup->loginUser();

    // Going to back to front page
    // header("location: http://localhost:3000/error=none?=Hello " . $uid);
}
?>