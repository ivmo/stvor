// menu
var toggler = document.getElementById('toggler');
toggler.onclick = function(event){
  event.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('main-nav').classList.toggle('main-nav--visible');
  // document.getElementById('page-header').classList.toggle('page-header--menu-open');
}

// search
$('.search-btn').on('click', function() {
    $('.search-btn').toggleClass('search-btn--close');
    $('.header__form-search').toggleClass('header__form-search--visible');
    $('#search').focus();
});

// ui
$( function() {
    $( "#city__select" ).selectmenu();
  });

// fancy
$(document).ready(function() {
		$(".fancybox").fancybox();
	});

// main slider
$('.main-slider__owl').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: [],
    mouseDrag: false,
    // autoplay: true,
    loop:true
});

// partners slider
$('.partners-list').owlCarousel({
    // autoplay: true,
    loop:true,
    margin: 60,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});
