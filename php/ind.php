
<?php

use \PHPMailer\PHPMailer\PHPMailer; 
use \PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php'; 
require 'phpmailer/src/PHPMailer.php';

$mail new PHPMailer(true);

$mail->CharSet = 'UTF-8'; 
$mail->setLanguage('ru', "phpmailer/language/");
$mail->IsHTML(true);

$mail->setFrom("everye.herokuapp.com", 'daw');

//Kony onnpodum

$mail->addAddress($_POST['body']);

//Tema nucьma

$mail->body = 'daw';

$mail->Body = '<h1>Привет</h1>';


if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
?>



<!--


$name = $_POST['me'];

$emeil = $_POST['emeil'];

$nama = $_POST['nam'];

mail("maximloza0@gmail.com", "Ваше имя", "$nama"); 


-->