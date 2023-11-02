
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
    case '/verity.html':
      clearNavActive();
      $('#verity-link').addClass('active');
      break;
    case '/bluemine.html':
      clearNavActive();
      $('#bluemine-link').addClass('active');
      break;
    case '/agency.html':
      clearNavActive();
      $('#agency-link').addClass('active');
      break;
    case '/eos.html':
      clearNavActive();
      $('#eos-link').addClass('active');
      break;
    case '/cupid95.html':
      clearNavActive();
      $('#cupid-link').addClass('active');
      break;
    case '/resume.html':
      clearNavActive();
      $('#resume-link').addClass('active');
      break;
  }

  //clear nav active states
  function clearNavActive() {
    let navLinks = document.getElementsByClassName("nav-link-item");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
  }

});
