$(window).on('beforeunload', function() { $("video").hide(); });
var menushown = false;

$(document).ready(function(){

$('.vid-overlay').addClass('active');
// mouse over to trigger menu open
$('.mousezone').mouseover( function() {
	$('.menu').addClass('active');
}).mouseleave( function() {
	$('.menu').removeClass('active');
});

var lastScrollTop = 0;
//menu show/hide
$(window).scroll(function(){
	var st = $(this).scrollTop();
	if(st > $(".splash").outerHeight()){
		$('#menu').addClass('active');
		setTimeout(function() {$('.menu-label').addClass('hidden'); }, 2400);
		setTimeout(function() { menushown = true; }, 2400);
		if(($(window).width() < 1024) && (menushown == true)) {
			if(st > lastScrollTop) {
				//window.alert('hi');
				$('#menu').removeClass('active');
				$('#menu').removeClass('expanded');
			}
			else {
				$('#menu').addClass('active');
			}
		} 
	}
	else {
		$('#menu').removeClass('active');
		$('#menu').removeClass('expanded');
	}
	lastScrollTop = st;
});

//menu expand controls
$('.logo-icon').click(function(){
	if($('#menu').hasClass('expanded')) {
		$('#menu').removeClass('expanded');
	}
	else {
		$('#menu').addClass('expanded');
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
