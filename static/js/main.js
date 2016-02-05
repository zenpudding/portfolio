var foo = false;

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
		$('#menu').css({top:'5%'});
	}
	else {
		$('#menu').css({top: '-100px'});
	}
});

//hover stuff for design blocks
$('.design-container .block').mouseover( function() {
	$(this).addClass('active');
}).mouseleave( function() {
	$(this).removeClass('active');
});


});
