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
    $departure_dateTime = $_POST["departure_dateTime"]; 
    $arrival_dateTime = $_POST["arrival_dateTime"]; 
    $departure_location = $_POST["departure_location"]; 
    $arrival_location = $_POST["arrival_location"]; 
    $airline = $_POST["airline"]; 
    $tickets_left = $_POST["tickets_left"]; 
    $price = $_POST["price"];
    $type_of_flight = $_POST["type_of_flight"];
    $stops = $_POST["stops"];

    
    // Instantiate AddFlightContr class
    include "../classes/dbh.classes.php";
    include "../classes/addFlight.classes.php";
    include "../classes/addFlight-contr.classes.php";
    $addFlight = new AddFlightContr($departure_dateTime, $arrival_dateTime, $departure_location, $arrival_location, $airline, $tickets_left, $price, $type_of_flight, $stops);
    
    $addFlight->addFlight();
    // Running error handlers and adding flight
    
    header("error: None");
    }
?>