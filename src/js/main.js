$(window).on('beforeunload', function() { $("video").hide(); });
var menushown = false;

$(document).ready(function(){

var pathname = window.location.pathname;

if (pathname == '/work/') {
	setTimeout(function() {$('.menu-label').addClass('hidden'); }, 2400);
	menushow = true;	
}

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
	if(st > $(this).height() * 0.8){
		$('#menu').addClass('active');
		setTimeout(function() {$('.menu-label').addClass('hidden'); }, 2400);
		setTimeout(function() { menushown = true; }, 2400);
		if(($(window).width() < 1024) && (menushown == true)) {
			//scroll downwards
			if(st > lastScrollTop) {
				//window.alert('hi');
				$('#menu').removeClass('active');
				$('#menu').removeClass('expanded');
				$('.m-close').removeClass('active');
			}
			//scroll upwards
			else {
				$('#menu').addClass('active');
				$('.m-close').addClass('active');
			}
		} 
	}
	else {
		if (pathname != '/work/') {
			$('#menu').removeClass('active');
			$('#menu').removeClass('expanded');
		}
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

//contact link stuff
$('.contact-button, .email-link').click(function(){
	$('.email-select').select();
	try {
		document.execCommand('copy');
		$('.email-select').blur();
		$('.copy-dialog').addClass('active');
		setTimeout(function() {$('.copy-dialog').removeClass('active'); }, 1500);
	}
	catch (err) {
		window.location.href = 'mailto:qkzhou27@gmail.com';
	}
});

var openModal = function(pagepath) {
	$('#modal').addClass('active');
	$('#m-overlay').addClass('active');
	setTimeout(function() {$('body').addClass('modal-open'); }, 500);
	setTimeout(function() {$('#modal-content').load(pagepath + ' .case-container'); }, 500);
	setTimeout(function() {$('#m-overlay').addClass('small'); }, 500);
	setTimeout(function() {$('.m-close').addClass('active'); }, 500);
}

var closeModal = function() {
	$('#m-overlay').removeClass('small');
	setTimeout(function() {$('#modal-content').empty(); }, 500);
	setTimeout(function() {$('.m-close').removeClass('active'); }, 500);
	setTimeout(function() {$('#m-overlay').removeClass('active'); }, 1000);
	setTimeout(function() {$('#modal').removeClass('active'); }, 1000);
	setTimeout(function() {$('body').removeClass('modal-open') }, 500);
}

//load modal on work page
$('.ds-company').click(function(){
	openModal('/work/ds-co.html');
});

$('.ds-blog').click(function(){
	openModal('/work/ds-blog.html');
});

$('.hubbell').click(function(){
	openModal('/work/hubbell.html');
});

$('.napa').click(function(){
	openModal('/work/napa.html');
});

// closes modal
$('.m-close').click(function(){
	closeModal();
});

});
