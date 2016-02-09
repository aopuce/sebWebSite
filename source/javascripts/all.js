//= require_tree .

$(document).ready(function() {
  $('body').addClass('loaded');
  $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
  $('.btn-menu').on("click", function() {
    $(this).toggleClass('btn-open');
    $('.menu').toggleClass('menu-open');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if ($('body').css('overflow') != 'hidden') {
        $('body').css("overflow", "hidden");
      } else {
        $('body').css("overflow", "scroll");
      }
    }
  })


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: 3500,
    autoplayDisableOnInteraction: false,
    effect: 'fade'
  });

  //Loading new Opera
  var container = document.querySelector('.grid'),
      imgs = document.querySelectorAll('img'),
      headerWrapper = document.querySelector('.title'),
      textWrapper = document.querySelector('.measures');
      content = document.querySelector('.content'),
      defaultTitle = "Sebastian De Gobbis | Opere";

  function updateText(h){
    $('.title').load(h + ' .title');
    $('.measures').load(h + ' .measures');
  };

  function requestContent(file) {
    $('.content').slideDown(600, function(){
      $('.content').load(file + ' .content img');
    })
  };

  function removeCurrentClass() {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('current');
    };
  }

 function addCurrentClass(elem) {
   removeCurrentClass();
   var element = document.querySelector("." + elem);
   element.classList.add('current');
 }

  container.addEventListener('click', function(e) {
    if (e.target != e.currentTarget) {
      e.preventDefault();
      var data = e.target.getAttribute('data-name'),
      url = data + ".html";
      addCurrentClass(data);
      history.pushState(url, null, url);
        $("html, body").animate({
            scrollTop: 0
        }, 600);
      updateText(url);
      requestContent(url);
      $('.show-opera').addClass('lets');
      $('.grid').addClass('show');
      document.title = "Sebastian De Gobbis | " + data;
    }
    e.stopPropagation();
  }, false);


  window.addEventListener('popstate', function(e) {
    var character = e.state;
    if (character == null) {
      removeCurrentClass();
      $('.show-opera').removeClass('lets');
      headerWrapper.innerHTML = "<h2>Opere</h2>";
      textWrapper.innerHTML = " ";
      content.innerHTML = " ";
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      document.title = defaultTitle;
    } else {
      updateText(character);
      requestContent(character);
      addCurrentClass(character);
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      document.title = "Sebastian De Gobbis | " + character;
    }
  });
  $('.form_contacts').find('input, textarea').on('keyup', function (e) {
    var $this = $(this),
        label = $this.next('label');
    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('writing');
      } else {
        label.addClass('writing');
      }
    }
  });
});
//masonry
$(window).load(function() {
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  $grid.imagesLoaded().progress(function() {
    $grid.masonry();
  });
  $(window).resize(function() {
    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    })
  });

});
