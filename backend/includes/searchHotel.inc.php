<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include_once '../classes/dbh.classes.php';
include_once '../classes/searchHotel-post.classes.php';

// Instantiate DB & connect
$database = new Dbh();
$db = $database->connect();

// Instantiate hotel post object
$hotel = new SearchHotelPost($db);

$searchTerm = $_POST['hotelSearchTerm'];

// Hotel post query
$result = $hotel->read($searchTerm);
// Get row count
$num = $result->rowCount();


// Check if any hotels
if($num > 0) {
    // Hotels array
    $hotels_arr = array();
    $hotels_arr['hotels'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $hotel_item = array(
            'id' => $hotel_id,
            'name' => $hotel_name,
            'location' => $hotel_location,
            'titleDescription' => $description_title,
            'description' => $description,
            'rating' => $rating,
            'reviews' => $reviews,
            'price' => $price,
        );

        // Push to "hotels"
        array_push($hotels_arr['hotels'], $hotel_item);
    }

    // Turn to JSON & output
    echo json_encode($hotels_arr);
} else {
    // No posts
    echo json_encode(
        array('message' => 'No hotels found.')
    );
}

?>