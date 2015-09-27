$(document).ready(function(){
	$('form').submit(function(event){

		// stop the form from actually posting
		event.preventDefault();

		// send the request
		$.post('/process.php', {
				first_name: $('#FirstName').val(),
				last_name: $('#LastName').val(),
				phone: $('#Phone').val(),
				email: $('#Email').val(),
				company: $('#Company').val(),
				job_function: $('#Job_Function').val()
		}, function(d){
			alert(d);
		});
		
	});

	// validate the contact form
	$(function() {
		$('#contact').validate({
			rules: {
				first_name: {
					required: true,
					minlength: 2
				},
				last_name: {
					required: true,
					minlength: 2					
				},
				phone: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				company: {
					required: true
				},
				job_function: {
					required: true
				}
			},
			messages: {
				first_name: {
					required: 'Please fill in your first name',
					minlength: 'Your name must consist of at least 2 characters'
				},
				last_name: {
					required: 'Please fill in your first name',
					minlength: 'Your name must consist of at least 2 characters'
				},
				phone: {
					required: 'Please fill in your phone number'
				},
				email: {
					required: 'Email address required'
				},
				company: {
					required: 'What company are you affiliated with?'
				},
				job_function: {
					required: 'What is your current role?'
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type: 'POST',
					data: $(form).serialize(),
					url: 'process.php'
				});
			}
		});
	})

});