<?php

abstract class AddFlight extends Dbh {

    protected function setFlight($departure_dateTime, $arrival_dateTime, $departure_location, $arrival_location, $airline, $tickets_left, $price, $type_of_flight, $stops) {
        $sql = 'INSERT INTO flights(departure_time, arrival_time, departure_location, arrival_location, airline, tickets_left, price, type_of_flight, stops) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
        $stmt = $this->connect()->prepare($sql);


        if(!$stmt->execute(array($departure_dateTime, $arrival_dateTime, $departure_location, $arrival_location, $airline, $tickets_left, $price, $type_of_flight, $stops))) {
            $stmt = null;
            header("error: Stmt-Failed");
            exit();
        }

        $stmt = null;

    }
}

?>