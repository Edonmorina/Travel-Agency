<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
<?php

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
</body>
</html>