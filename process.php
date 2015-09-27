<?php

// for cross-domain
switch ($_SERVER['HTTP_ORIGIN']) {
    case 'http://celestelayne.github.io/percolate-cs/': case 'http://celestelayne.github.io/percolate-cs/':
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    break;
}

$errors     = array();
$data       = array();

    if (isset($_POST["submit"])) {
        $firstname = $_POST['FirstName'];
        $lastname = $_POST['LastName'];
        $phone = $_POST['Phone'];
        $email = $_POST['Email'];
        $company = $_POST['Company'];
        $jobfunction = $_POST['Job_Function'];
        $from = $_REQUEST['Email'];
        $to = 'layne.celeste@gmail.com'; // substitute out your email address to receive submit data
        $header = "From:" . $from . "\r\n";
        $header .= "cc:" . $to . "\r\n";
        $subject = 'Message from Shinola Case Study Page';

        $body = $firstname . " " . "Thanks for requesting a demo! We’ll get back to you soon.";
    }

    // Check if first name entered
    if (empty($_POST['FirstName'])) {
        $errFName = 'Please enter first name';
    }
    // Check if last name entered
    if (empty($_POST['LastName'])) {
        $errLName = 'Please enter last name';
    }
    // Check if phone number entered
    if (empty($_POST['Phone'])) {
        $errPhone = 'Please enter a valid phone number';
    }
    // Check if email address entered and is valid
    if (empty($_POST['Email'] || !filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL))) {
        $errEmail = 'Please enter a valid email address'
    }
    // Check if company name entered
    if (empty($_POST['Company'])) {
        $errCompany = 'Please enter company name';
    }
    // Check if job function entered
    if(!$_POST['Job_Function']) {
        $errJFunc = 'Please select from the dropdown';
    }
// if there are no errors, send the email
if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // if there are no errors process our form, then return a message

        // DO ALL YOUR FORM PROCESSING HERE
        // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

?>