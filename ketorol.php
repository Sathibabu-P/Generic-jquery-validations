<?php

header("Access-Control-Allow-Origin: *");

require 'PHPMailer/PHPMailerAutoload.php';


if(isset($_POST["submit"])) {

    $mail             = new PHPMailer();

    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->Host = 'smtp.gmail.com';                 
    $mail->SMTPAuth   = true;                  // enable SMTP authentication
    $mail->SMTPSecure = "tls";                 
    $mail->Host       = "smtp.gmail.com";      // SMTP server
    $mail->Port       = 587;                  // SMTP port
    $mail->Username   = "25.years.of.ketoroldt@gmail.com";  // username
    $mail->Password   = "sathi123#";            // password

    $mail->SetFrom('25.years.of.ketoroldt@gmail.com', 'Ketorol DT', 0);
    //$mail->IsHTML(true);

    $mail->Subject    = "Ketorol DT Celebrating 25 Years";

    //$mail->Body    = '<h1>Hai</h1>';

    $mail->IsHTML(true);
    $mail->AddEmbeddedImage('Ketorol_Mailer.png', 'Ketorol_Mailer', 'Ketorol_Mailer.png'); // attach file logo.jpg, and later link to it using identfier logoimg
    // $mail->Body = "<div style='width: 71%;text-align: justify;line-height: 25px;font-size: 18px;font-family: monospace;font-weight: 600;'><P>Dear Doctor,</P><p>Greetings from Dr. Reddy &apos; s!</p><p >We take this opportunity to thank you for joining hands in this noble endeavour of spreading the awareness of Diabetes, Hypertension &amp; Cholesterol detection and management amongst womens.</p><p >This Dr Reddys initiative on the eve of World Diabetes Day was with the belief of Healthy Woman will lead to Health Future! Thank you!</p><p style='margin:0px'>Regards,</p><p style='margin-top:2px'><strong>Dr Reddy &apos; s</strong></p></div>";

    $mail->Body = "<div><img src=\"cid:Ketorol_Mailer\" /></div>";

    $address = $_POST['email'];
    $mail->AddAddress($address);
    $mail->IsHTML(true);
    if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
     echo "Message sent!";
      //unlink($target_file);
    }  

}

// $target_dir = "images/";
// $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
// $uploadOk = 1;
// $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// // Check if image file is a actual image or fake image
// if(isset($_POST["submit"])) {
//     $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//     if($check !== false) {
//         echo "File is an image - " . $check["mime"] . ".";
//         $uploadOk = 1;
//     } else {
//         echo "File is not an image.";
//         $uploadOk = 0;
//     }
// }


// Allow certain file formats
// if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "PNG" && $imageFileType != "JPG") {
//     echo "Sorry, only JPG, JPEG, PNG  files are allowed.";
//     $uploadOk = 0;
// }

// // Check if $uploadOk is set to 0 by an error
// if ($uploadOk == 0) {
//     echo "Sorry, your file was not uploaded.";
// // if everything is ok, try to upload file
// } else {
//     if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
		
// 		$mail->addAttachment($target_file);    // Optional name
// 		$mail->isHTML(true); 
		
// 		if(!$mail->Send()) {
// 		  echo "Mailer Error: " . $mail->ErrorInfo;
// 		} else {
// 		 echo "Message sent!";
// 		  unlink($target_file);
// 		}
		
//        // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
//     } else {
//        echo "Sorry, there was an error uploading your file.";
//     }
// }


?>