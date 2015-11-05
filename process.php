<?php
require_once 'swiftmailer/lib/swift_required.php';

//Grab post data
        $firstname = $_POST['firstName'];
        $lastname = $_POST['lastName'];
        $phone = $_POST['phoneNum'];
        $email = $_POST['email'];
        $company = $_POST['companyName'];
        $jobfunction = $_POST['jobFunction'];

// Create the email body message
        $data = "Dear: " . $firstname . "\n" . "Thanks for requesting a demo! We will get back to you soon." . "\n" . $phone . "\n" . $email . "\n" . $company . "\n" . $jobfunction . "\n";

// Create mail transport configuration
    $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
        ->setUsername('foo.bar@gmail.com')
        ->setPassword('password')
    ;

// Create mailer using transport
    $mailer = Swift_Mailer::newInstance($transport);

// Create a message mailer
    $message = Swift_Message::newInstance('Message')
        -> setFrom (array('layne.celeste@gmail.com' => 'Celeste Layne'))
        -> setTo (array('celeste@artmapr.co', 'layne.celeste@gmail.com' => 'Recipient'))
        -> setSubject ('Message from HTML5 CSS3 PHP Contact Form')
        -> setBody ($data, 'text/html')
    ;

// Send the message
        $result = $mailer->send($message);

?>