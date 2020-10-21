// Every document of jQuery shud start lyk dis
$(document).ready(function(){

  /* Sticky tab yaha par waypoint ka plugin hai*/
$('.js--feat-section').waypoint(function(direction){

  if(direction == "down"){
    $('nav').addClass('sticky');
  }
  else {
    $('nav').removeClass('sticky');
  }
},{
    offset:'60px;'
  });

/* First two buttons of main page */

/* Jump to page yeh sirf jQuery hai no plugins */
  $('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js--sect-plans').offset().top},1000);
  });

  $('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop: $('.js--feat-section').offset().top},1000);
  });

/* Scrolling feature */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// ANimation on scroll
  $('.js--wp-1').waypoint(function() {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },
  {
    offset:'50%'
  });

  $('.js--wp-2').waypoint(function() {
    $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
  },
  {
    offset:'50%'
  });

  $('.js--wp-3').waypoint(function() {
    $('.js--wp-3').addClass('animate__animated animate__fadeInRightBig');
  },
  {
    offset:'50%'
  });

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');

    nav.slideToggle(200);

    var popcorn = $('.js--nav-icon i');

    if(popcorn.hasClass('icon ion-md-menu')){
      popcorn.removeClass('icon ion-md-menu');
      popcorn.addClass('icon ion-md-close-circle-outline');
    }
    else{
      popcorn.removeClass('icon ion-md-close-circle-outline');
      popcorn.addClass('icon ion-md-menu');
    }
  });

});
