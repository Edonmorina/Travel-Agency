
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
    if(isset($_POST['submit'])) {

        // Grabbing the data
    $uid = $_POST["uid"];
    $pwd = $_POST["pwd"];
    $pwdRepeat = $_POST["rePwd"];
    $email = $_POST["email"];

    
    // Instantiate SignupContr class
    include "../classes/dbh.classes.php";
    include "../classes/signup.classes.php";
    include "../classes/signup-contr.classes.php";
    $signup = new SignupContr($uid, $pwd, $pwdRepeat, $email);
    
    // Running error handlers and user signup
    $signup->signupUser();
    
    header("error: None");
    }
?>