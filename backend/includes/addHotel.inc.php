
<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];
header("Content-Type: application/json");

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
    
    $hotel_name = $_POST["hotel_name"];
    $hotel_location = $_POST["hotel_location"];
    $description_title = $_POST["description_title"];
    $description = $_POST["description"];
    $rating = $_POST["rating"];
    $reviews = $_POST["reviews"];
    $price = $_POST["price"];

    
    // Instantiate AddFlightContr class
    include "../classes/dbh.classes.php";
    include "../classes/addHotel.classes.php";
    include "../classes/addHotel-contr.classes.php";
    $addHotel = new AddHotelContr($hotel_name, $hotel_location, $description_title, $description, $rating, $reviews, $price);
    
    $addHotel->addHotel();
    // Running error handlers and adding flight
    
    header("error: None");
    }
?>