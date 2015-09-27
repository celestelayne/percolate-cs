$(document).ready(function(){

	$('#contact').submit(function(event){

		var formData = {
				'firstName'	: $('input[name=FirstName]').val(),
				'lastName'		: $('input[name=LastName]').val(),
				'phone'				: $('input[name=Phone]').val(),
				'email'				: $('input[name=Email]').val(),
				'company'			: $('input[name=Company]').val(),
				'jobFunction'	: $('select[name=Job_Function]').val()
		};

		console.log(formData);

		// process the form
			$.ajax({
				type 			: 'POST',
				url				: 'http://celestelayne.github.io/percolate-cs/process.php', // url where we want to post
				data			: formData, // data sent
				dataType	: 'json', // type of data we expect back
	      contentType: "application/x-www-form-urlencoded; charset=utf-8",
	      success:function(data)
				 {
				 	console.log(formData);
				 },
				error:function(jqXHR,textStatus,errorThrown)
				 {
				 	alert("You can not send Cross Domain AJAX requests: "+errorThrown);
				 }
		})
			.done(function(data) {
				// log data to the console to see what is being passed
				console.log(data)

			$('.form-group').removeClass('has-error'); // remove the error class
			$('.help-block').remove(); // remove the error text

				// Set the message text.
	    $('.form-group').text(data);

	    // Clear the form.
	    $('#FirstName').val('');
	    $('#LastName').val('');
	    $('#Phone').val('');
	    $('#Email').val('');
	    $('#Company').val('');
	    $('#Job_Function').val('');

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

				}
			})
			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			
			});
			  var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://celestelayne.github.io/percolate-cs/', true);
				xhr.onreadystatechange = function () {
				  if (this.status == 200 && this.readyState == 4) {
				    console.log('response: ' + this.responseText);
				  }
				};
        xhr.send(); // XHR finished loading: GET 

				// stop the form from actually posting
				event.preventDefault();
		
	});

});