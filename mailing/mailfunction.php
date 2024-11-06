<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require('./vendor/autoload.php');

function mailfunction($mail_reciever_email, $mail_reciever_name, $mail_msg, $attachment = false){

    $mail = new PHPMailer();
    $mail->isSMTP();

    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;

    $mail->Host = "smtp.mailosaur.net";

    $mail->Port = 587;

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->SMTPAuth = true;

    $mail->Username = "mpqyijvw@mailosaur.net";

    $mail->Password = "4hs1PBgNe86SbP7VqbdaHfLtexYUuvxr";

    $mail->setFrom($mail_reciever_email, $mail_reciever_name);

    $mail->addAddress("Tracetechi@gmail.com", "Tracetech Team");

    $mail->Subject = 'Someone Contacted You!';

    $mail->isHTML($isHtml = true );

    $mail->msgHTML($mail_msg);


    if($attachment !== false){
        $mail->AddAttachment($attachment);
    }
    
    $mail->AltBody = 'This is a plain-text message body';
 
    if (!$mail->send()) {
        return false;
    } else {
        return true;
    }
}

?>
