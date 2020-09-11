$(function() {
    $('.message').click(function(event) {
    	event.preventDefault();
    	$('.icons').slideUp();
    	$('.contact-form').slideDown();
    })

    $('.go-back').click(function(event) {
    	event.preventDefault();
    	$('.contact-form').slideUp();
    	$('.icons').slideDown();
    })    
});

