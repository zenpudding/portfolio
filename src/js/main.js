
$(document).ready(function(){

// mouse over to trigger menu open
$('.mousezone').mouseover( function() {
	$('.menu').addClass('active');
}).mouseleave( function() {
	$('.menu').removeClass('active');
});

//menu show/hide
$(window).scroll(function(){
	if($(window).scrollTop() > $(".splash").outerHeight() - 300){
		$('#menu').addClass('active');
	}
	else {
		$('#menu').removeClass('active');
	}
});

//hover stuff for design blocks
$('.design-container .block').mouseover( function() {
	$(this).addClass('active');
}).mouseleave( function() {
	$(this).removeClass('active');
});


});
