<?php

class LoginContr extends Login {
    
    private $uid;
    private $pwd;
    private $pwdRepeat;
    private $email;

    public function __construct($uid, $pwd) {
        $this->uid = $uid;
        $this->pwd = $pwd;
    }

    public function loginUser() {
        if($this->emptyInput() == false) {
            // echo "Empty Input!";
            header("location: lohalhost:3000/register?error=emptyinput");
            exit();
        $this->getUser($this->uid, $this->pwd);
        }
    }

    private function emptyInput() {
        $result = false;
        if(empty($this->uid) || empty($this->pwd) || empty($this->pwdRepeat) || empty($this->email)) {
            $result = false;
        }else {
            $result = true;
        }

        return $result;
    }


}
?>