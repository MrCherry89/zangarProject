$(document).ready(function () {

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".community-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    fade: true,
    dots: false,
    prevArrow: $(".community-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".community-slider-wrap .slider-navigation .slick-next"),
  });

  $(".gallery-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    fade: true,
    dots: false,
    prevArrow: $(".gallery-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".gallery-slider-wrap .slider-navigation .slick-next"),
  });

  $(".images-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    dots: false,
    variableWidth: true,
    prevArrow: $(".yard-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".yard-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  $('.your-popup-trigger').magnificPopup({
    type: 'inline',
    midClick: true,
    callbacks: {
      open: function () {
        // Инициализация слайдера с проверкой и задержкой (DOM успевает отрисоваться)
        setTimeout(function () {
          const $slider = $('#popup-slider .gallery-slider');
  
          if (!$slider.hasClass('slick-initialized')) {
            $slider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              speed: 800,
              fade: true,
              dots: false,
              prevArrow: $('#popup-slider .slider-navigation .slick-prev'),
              nextArrow: $('#popup-slider .slider-navigation .slick-next'),
            });
          } else {
            $slider.slick('setPosition'); // на всякий случай перерисовка
          }
        }, 50);
      }
    }
  });
  

  $(".halls-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    fade: true,
    dots: false,
    prevArrow: $(".halls-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".halls-slider-wrap .slider-navigation .slick-next"),
  });




  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
});

$(".main-menu li a").click(function (e) {
  e.preventDefault();
  $(".drop-menu").removeClass("is-active");
  $(".menu-wrap").removeClass("open");
  $("body, html").removeClass("overflow");
});

$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$(".popup-gallery2").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$('.popup').magnificPopup({
  type: 'inline',
  mainClass: 'mfp-fade'
});

$(".main-menu li a").smoothScroll({
  speed: 1000,
});

const header = document.querySelector('.header'); // замени на свой селектор

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

$(".gallery-slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  speed: 800,
  dots: false,
  variableWidth: true,
  prevArrow: $(".gallery-slider-wrap2 .slider-navigation .slick-prev"),
  nextArrow: $(".gallery-slider-wrap2 .slider-navigation .slick-next"),
});
  AOS.init();
});
