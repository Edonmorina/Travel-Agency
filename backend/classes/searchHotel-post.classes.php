<?php
class SearchHotelPost {
    // DB Stuff
    private $conn;
    private $table = 'hotels';

    // Post Properties
    public $hotel_id; 
    public $hotel_name; 
    public $hotel_location; 
    public $description_title; 
    public $description; 
    public $rating; 
    public $reviews; 
    public $price;

    // Constructor with DB
    
    public function __construct($db) {
        $this->conn = $db;
    }

    // Get Posts
    public function read($searchTerm) {
        if(empty($searchTerm) || $searchTerm === null) {
            // Create query
            $query = "SELECT hotel_id, hotel_name, hotel_location, description_title, 'description', rating, reviews, price FROM " . $this->table;
        }else {
            // Create query
            $query = "SELECT hotel_id, hotel_name, hotel_location, description_title, 'description', rating, reviews, price FROM " . $this->table . 
            " WHERE hotel_name LIKE '%" . $searchTerm . "%' OR hotel_location LIKE '%" . $searchTerm . "%' LIMIT 25;";
        }        

        // Prepare stmt
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;
    }
}

?>