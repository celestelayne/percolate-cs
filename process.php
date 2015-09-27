<?php
    
$message = '';

// Check that form fields are not empty
    if (empty($_POST['FirstName']) || empty($_POST['LastName']) || empty($_POST['Phone']) || empty($_POST['Email']) || empty($_POST['Company']) ){
        die('Name is required.');
    }

    if($_POST['Job_Function'] == '-'){
        die('Please select a job function.');
    }

    // Construct the emaail message
$message .= <<<TEXT
    First_Name: {$_POST['FirstName']}
    Last_Name: {$_POST['LastName']}
    Phone: {$_POST['Phone']}
    Email: {$_POST['Email']}
    Company: {$_POST['Company']}
    Job_Function: {$_POST['Job_Function']}
TEXT;

$to = 'layne.celeste@gmail.com';
$from = $_REQUEST['Email'];
$subject = 'You have been contacted';
$header = 'From: ' . $from;

$body = 'Thanks for requesting a demo! We’ll get back to you soon.';

if(!mail($to, $subject, $message, $header, $body)){
    print("<p class='Error'>Problem in Sending Mail.</p>");
} else {
    die( "<p class='success'>Mail Sent.</p>");
}

?>