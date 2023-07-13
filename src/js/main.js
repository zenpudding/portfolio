
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

  //active state on nav depending on page
  switch(window.location.pathname) {
    case '/':
      clearNavActive();
      $('#about-link').addClass('active');
      break;
    case '/bluemine.html':
      clearNavActive();
      $('#bluemine-link').addClass('active');
  }

  //clear nav active states
  function clearNavActive() {
    let navLinks = document.getElementsByClassName("nav-link-item");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
  }

});
