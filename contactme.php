<?php   
    require("./mailing/mailfunction.php");

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $body = "<ul><li>Name: ".$name."</li><li>Email: ".$email."</li><li>Message: ".$message."</li></ul>";

    $status = mailfunction($email, $name, $body); //reciever
    if($status)
        echo '<center><h1>Thanks! We will contact you soon.</h1></center>';
    else
        echo '<center><h1>Error sending message! Please try again.</h1></center>';    
?>