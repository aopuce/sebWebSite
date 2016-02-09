
$(document).ready(function() {
  $('body').addClass('loaded');
  $('.btn-menu').on("click", function(){
    $(this).toggleClass('btn-open'),
    $('.menu').toggleClass('menu-open')
  })
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
  });

  //Loading new Opera
  var isAnimating = false,
      firstLoad = false;
  $('section').on('click', '[data-type="page-transition"]', function(e){
    e.preventDefault();
    var newPage = $(this).attr('href');
    if ( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function(){
    if( firstLoad ) {
      var newPageArray = location.pathname.split('/');
      var newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating ) changePage(newPage, false);
    }
    firstLoad = true;
  });

  function changePage(url, bool) {
    isAnimating = true;
    $('body').removeClass('loaded');
    loadNewContent(url, bool);
    newLoaction = url;
    setTimeout(function(){$('body').addClass('loaded')}, 1000);
  };
  function loadNewContent(url, bool) {
    url = ('' == url) ? 'index.html' : url;
    var newSection = url.replace('.html', ''),
        section = $('<div class="opera-content"></div>');
    section.load(url, function(e){
     $('.opera-content').html(section);
     if(url != window.location && bool) {
       window.history.pushState({path: url},'',url);
     }
    });
  }
});
