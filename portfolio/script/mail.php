<?php 
if(isset($_POST['submit'])){
    $to1 = "hazrafkhan@gmail.com"; // this is your Email address
    $to2 = "hazraf_389@yahoo.com.com"; // this is your backup Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to1,$subject,$message,$headers);
    mail($to2,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", you will be contacted shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
