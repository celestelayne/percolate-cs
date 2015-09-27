$(document).ready(function(){
	$('form').submit(function(event){

		$('.form-group').removeClass('has-error'); // remove the error class
		$('.help-block').remove(); // remove the error text

		var formData = {
				'firstName'	: $('input[name=FirstName]').val(),
				'lastName'		: $('input[name=LastName]').val(),
				'phone'				: $('input[name=Phone]').val(),
				'email'				: $('input[name=Email]').val(),
				'company'			: $('input[name=Company]').val(),
				'jobFunction': $('input[name=Job_Function]').val()			
		};

		// process the form
		$.ajax({
			type 			: 'POST',
			url				: 'process.php', // url where we want to post
			crossDomain: true,
			data			: formData, // data object
			dataType	: 'json', // type of data we expect back
			encode		: true
		})

			.done(function(data) {
				// log data to the console to see what is being passed
				console.log(data)

				// here we will handle errors and validation messages
				if ( ! data.success) {
					
					// handle errors for first name ---------------
					if (data.errors.firstName) {
						$('#first-name').addClass('has-error'); // add the error class to show red input
						$('#first-name').append('<div class="help-block">' + data.errors.firstName + '</div>'); // add the actual error message under our input
					}

					// handle errors for last name ---------------
					if (data.errors.lastName) {
						$('#last-name').addClass('has-error'); // add the error class to show red input
						$('#last-name').append('<div class="help-block">' + data.errors.lastName + '</div>'); // add the actual error message under our input
					}

					// handle errors for phone number ---------------
					if (data.errors.phone) {
						$('#phone-number').addClass('has-error'); // add the error class to show red input
						$('#phone-number').append('<div class="help-block">' + data.errors.phone + '</div>'); // add the actual error message under our input
					}

					// handle errors for email address ---------------
					if (data.errors.email) {
						$('#email-address').addClass('has-error'); // add the error class to show red input
						$('#email-address').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
					}

					// handle errors for company name ---------------
					if (data.errors.company) {
						$('#company-name').addClass('has-error'); // add the error class to show red input
						$('#company-name').append('<div class="help-block">' + data.errors.company + '</div>'); // add the actual error message under our input
					}

					// handle errors for job function ---------------
					if (data.errors.jobFunction) {
						$('#job-function').addClass('has-error'); // add the error class to show red input
						$('#job-function').append('<div class="help-block">' + data.errors.jobFunction + '</div>'); // add the actual error message under our input
					}

				} else {

					// ALL GOOD! just show the success message!
					$('form').append('<div class="alert alert-success">' + data.message + '</div>');

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

				}
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			
			});
				// stop the form from actually posting
				event.preventDefault();
		
	});

});