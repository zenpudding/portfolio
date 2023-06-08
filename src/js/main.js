
$(document).ready(function(){

  //nav expand controls
  $('.title').click(function(){
  	if($('nav').hasClass('expanded')) {
  		$('nav').removeClass('expanded');
  	}
  	else {
  		$('nav').addClass('expanded');
  	}
  });

});
