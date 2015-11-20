//= require_tree .
$(document).ready(function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: 3500,
      autoplayDisableOnInteraction: false,
      effect: 'fade'
    })
});
