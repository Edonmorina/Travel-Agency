<?php

class AddFlightContr extends AddFlight {
    
    private $departure_dateTime; 
    private $arrival_dateTime; 
    private $departure_location; 
    private $arrival_location; 
    private $airline; 
    private $tickets_left; 
    private $price;
    private $type_of_flight;
    private $stops;

    public function __construct($departure_dateTime, $arrival_dateTime, $departure_location, $arrival_location, $airline, $tickets_left, $price, $type_of_flight, $stops) {
        $this->departure_dateTime = $departure_dateTime;
        $this->arrival_dateTime = $arrival_dateTime;
        $this->departure_location = $departure_location;
        $this->arrival_location = $arrival_location;
        $this->airline = $airline;
        $this->tickets_left = $tickets_left;
        $this->price = $price;
        $this->type_of_flight = $type_of_flight;
        $this->stops = $stops;
    }

    public function addFlight() {
        if($this->emptyInput() == false) {
            header("error: Empty-Input");
            exit();
        }

        $this->setFlight(
            $this->departure_dateTime, 
            $this->arrival_dateTime, 
            $this->departure_location, 
            $this->arrival_location, 
            $this->airline, 
            $this->tickets_left, 
            $this->price, 
            $this->type_of_flight, 
            $this->stops);

    }

    private function emptyInput() {
        $result = false;
        if(empty($this->departure_dateTime) 
            || empty($this->arrival_dateTime) 
            || empty($this->departure_location) 
            || empty($this->arrival_location)
            || empty($this->airline)
            || empty($this->tickets_left)
            || empty($this->price)
            || empty($this->type_of_flight)
            || empty($this->stops)) {
            $result = false;
        }else {
            $result = true;
        }
        return $result;
    }

}
?>