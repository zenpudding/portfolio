
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

//load modal on work page
$('.ds-site').click(function(){
	//event.preventDefault();
	$('#modal').addClass('active');
	$('#m-overlay').addClass('active');
	setTimeout(function() {$('body').addClass('modal-open'); }, 500);
	setTimeout(function() {$('#modal-content').load('/work/ds-site.html .case-container'); }, 500);
	setTimeout(function() {$('#m-overlay').addClass('small'); }, 500);
	setTimeout(function() {$('.m-close').addClass('active'); }, 500);
	setTimeout(function() {$('#m-overlay').css('z-index', '0'); }, 500);
});

$('.m-close').click(function(){
	$('#m-overlay').css('z-index', '999');
	$('#m-overlay').removeClass('small');
	setTimeout(function() {$('#modal-content').empty(); }, 500);
	setTimeout(function() {$('.m-close').removeClass('active'); }, 500);
	setTimeout(function() {$('#m-overlay').removeClass('active'); }, 1000);
	setTimeout(function() {$('#modal').removeClass('active'); }, 1000);
	setTimeout(function() {$('body').removeClass('modal-open') }, 500);
});

});
