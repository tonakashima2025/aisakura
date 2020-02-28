"use strict";
{

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 1500,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// jQuery
jQuery(function() {
  // drawer
  jQuery('.smenu').on('click', function () {
    jQuery(this).toggleClass('open');
    jQuery('.snav').toggleClass('open');
  });
  
  // topScroll
  jQuery("#pagetop").hide();
  jQuery(window).on("scroll", function() {
      if (jQuery(this).scrollTop() > 100) {
          jQuery("#pagetop").fadeIn('slow');
      } else {
          jQuery("#pagetop").fadeOut('slow');
      }
  });
  jQuery('#pagetop').click(function () {
    jQuery('html,body').animate({'scrollTop':0},'slow');
  });

});

}
