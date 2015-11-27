//= require_tree .
$(document).ready(function() {
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  $grid.imagesLoaded().progress( function(){
    $grid.masonry();
  });
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: 3500,
      autoplayDisableOnInteraction: false,
      effect: 'fade'
    })
});
