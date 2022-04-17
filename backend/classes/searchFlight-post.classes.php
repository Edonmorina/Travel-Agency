<?php
class SearchFlightPost {
    // DB Stuff
    private $conn;
    private $table = 'flights';
    
    // Post Properties
    
    public $flight_id; 
    public $departure_time; 
    public $arrival_time; 
    public $departure_location; 
    public $arrival_location; 
    public $airline; 
    public $tickets_left; 
    public $price;
    public $type_of_flight;
    
    // Constructor with DB
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    // Get Posts
    public function read($depSearchTerm, $arriSearchTerm) {
        if(empty($depSearchTerm) || $arriSearchTerm === null && empty($depSearchTerm) || $arriSearchTerm === null) {
            // Create query
            $query = "SELECT flight_id, departure_time, arrival_time, departure_location, arrival_location, airline, tickets_left, price, type_of_flight FROM " . $this->table;
        }else {
            // Create query
            $query = "SELECT flight_id, departure_time, arrival_time, departure_location, arrival_location, airline, tickets_left, price, type_of_flight FROM " . $this->table . 
            " WHERE departure_location LIKE '%" . $depSearchTerm . "%' OR arrival_location LIKE '%" . $arriSearchTerm . "%' LIMIT 25";
        }        

        // Prepare stmt
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;
    }
}

?>