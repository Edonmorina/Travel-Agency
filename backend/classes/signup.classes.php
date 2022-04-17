<?php

abstract class SignUp extends Dbh {

    protected function setUser($uid, $pwd, $email) {
        $sql = 'INSERT INTO users(users_uid, users_pwd, users_email) VALUES (?, ?, ?);';
        $stmt = $this->connect()->prepare($sql);

        $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

        if(!$stmt->execute(array($uid, $hashedPwd, $email))) {
            $stmt = null;
            header("error: Stmt-Failed");
            exit();
        }

        $stmt = null;

    }

    protected function checkUsername($uid) {
        $sql = 'SELECT users_uid FROM users WHERE users_uid = ?;';
        $stmt = $this->connect()->prepare($sql);

        if(!$stmt->execute(array($uid))) {
            $stmt = null;
            header("error: Stmt-Failed");
            exit();
        }

        $resultCheck = false;
        if($stmt->rowCount() > 0) {
            $resultCheck = false;
        } else {
            $resultCheck = true;
        }

        return $resultCheck;
    }

    protected function checkUserEmail($email) {
        $sql = 'SELECT users_email FROM users WHERE users_email = ?;';
        $stmt = $this->connect()->prepare($sql);

        if(!$stmt->execute(array($email))) {
            $stmt = null;
            header("error: Stmt-Failed");
            exit();
        }

        $resultCheck = false;
        if($stmt->rowCount() > 0) {
            $resultCheck = false;
        } else {
            $resultCheck = true;
        }

        return $resultCheck;
    }
}

?>