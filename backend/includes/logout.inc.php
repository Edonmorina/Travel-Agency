<?php

session_start();
session_unset();
session_destroy();

// going back to homepage
header("location: http://localhost:3000?error=none");

?>