<?php

abstract class AddHotel extends Dbh {

    protected function setHotel($hotel_name, $hotel_location, $description_title, $description, $rating, $reviews, $price) {
        $sql = "INSERT INTO hotels(hotel_name, hotel_location, description_title, description, rating, reviews, price) VALUES (?, ?, ?, ?, ?, ?, ?);";
        $stmt = $this->connect()->prepare($sql);


        if(!$stmt->execute(array($hotel_name, $hotel_location, $description_title, $description, $rating, $reviews, $price))) {
            $stmt = null;
            header("error: Stmt-Failed");
            exit();
        }

        $stmt = null;

    }
}

?>