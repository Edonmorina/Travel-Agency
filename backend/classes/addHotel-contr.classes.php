<?php

class AddHotelContr extends AddHotel {
    
    private $hotel_name; 
    private $hotel_location; 
    private $description_title; 
    private $description;
    private $rating; 
    private $reviews;
    private $price;

    public function __construct($hotel_name, $hotel_location, $description_title, $description, $rating, $reviews, $price) {
        $this->hotel_name = $hotel_name;
        $this->hotel_location = $hotel_location;
        $this->description_title = $description_title;
        $this->description = $description;
        $this->rating = $rating;
        $this->reviews = $reviews;
        $this->price = $price;
    }

    public function addHotel() {
        if($this->emptyInput() == false) {
            header("error: Empty-Input");
            exit();
        }

       

        $this->setHotel(
            $this->hotel_name, 
            $this->hotel_location, 
            $this->description_title, 
            $this->description, 
            $this->rating, 
            $this->reviews, 
            $this->price
        );

    }

    private function emptyInput() {
        $result = false;
        if(empty($this->hotel_name) || empty($this->hotel_location) || empty($this->description_title) || empty($this->description) || empty($this->rating) || empty($this->reviews) || empty($this->price)) {
            $result = false;
        }else {
            $result = true;
        }
        return $result;
    }

    private function ratingInputBiggerThan5() {
        $result = false;
        if($this->rating <= 5) {
            $result = false;
        }else {
            $result = true;
        }
        return $result;
    }

}
?>