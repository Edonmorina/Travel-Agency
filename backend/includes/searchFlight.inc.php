<?php
// Headers
$http_origin = $_SERVER['HTTP_ORIGIN'];

$allowed_domains = array(
  'http://localhost:3000',
  'https://edon-travel.netlify.app',
);

if (in_array($http_origin, $allowed_domains))
{  
    header("Access-Control-Allow-Origin: $http_origin");
}
header('Content-type: application/json');

include_once '../classes/dbh.classes.php';
include_once '../classes/searchFlight-post.classes.php';

// Instantiate DB & connect
$database = new Dbh();
$db = $database->connect();

// Instantiate flight post object
$flight = new SearchFlightPost($db);

$depSearchTerm = $_POST['depSearchTerm'];
$arriSearchTerm = $_POST['arriSearchTerm'];

// flight post query
$result = $flight->read($depSearchTerm, $arriSearchTerm);
// Get row count
$num = $result->rowCount();


// Check if any flights
if($num > 0) {
    // flights array
    $flights_arr = array();
    $flights_arr['flights'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $flight_item = array(
            'id' => $flight_id,
            'departureTime' => $departure_time,
            'arrivalTime' => $arrival_time,
            'departureLocation' => $departure_location,
            'arrivalLocation' => $arrival_location,
            'airline' => $airline,
            'ticketsLeft' => $tickets_left,
            'price' => $price,
            'flightType' => $type_of_flight,
            'stops' => $stops
        );

        // Push to "flights"
        array_push($flights_arr['flights'], $flight_item);
    }

    // Turn to JSON & output
    echo json_encode($flights_arr);
} else {
    // No posts
    echo json_encode(
        array('message' => 'No flights found.')
    );
}

?>