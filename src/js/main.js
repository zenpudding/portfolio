var foo = false;

$(document).ready(function(){

// mouse over to trigger menu open
$('.mousezone').mouseover( function() {
	$('.menu').addClass('active');
}).mouseleave( function() {
	$('.menu').removeClass('active');
});


});
