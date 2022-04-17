<?php

class Dbh {

    private $host = "localhost";
    private $username = "root";
    private $password = "root";
    private $db = "travel_agency";
    private $conn;
    
    public function connect() {
        $this->conn = null;
        
        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';port=4306;dbname=' . $this->db, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conn;
            
        } catch(PDOException $err) {
            echo "Error!: " . $err->getMessage() . "<br/>";
            die();
        }   
    }
}
?>