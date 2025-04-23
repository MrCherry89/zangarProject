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

  $(".scroll").smoothScroll({
    speed: 1000,
  });

  $(".slider-for4").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav4",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav4").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for4",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    initialSlide: 1, // Синхронизация со вторым слайдом
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-for3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav3",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap2 .slider-navigation .slick-next"),
  });


  $(".slider-nav3").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for3",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  
  $(".samal-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $(".samal-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".samal-slider-wrap2 .slider-navigation .slick-next"),
  });



  $('.tabs').each(function() {
    var $tabs = $(this);

    // Открытие первой вкладки по умолчанию и инициализация слайдера внутри неё
    $tabs.find('.tab-links li:first').addClass('active');
    $tabs.find('.tab-content .tab-pane:first').addClass('active');

    var firstTabSlider = $tabs.find('.tab-content .tab-pane:first .samal-slider');
    if (firstTabSlider.length) {
        firstTabSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-prev"),
            nextArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-next"),
        });
    }

    // Обработчик клика по вкладкам
    $tabs.find('.tab-links a').click(function(e) {
        e.preventDefault();

        var $link = $(this);
        var target = $link.attr('href');

        // Переключаем вкладки
        $tabs.find('.tab-links li').removeClass('active');
        $link.parent().addClass('active');

        // Переключаем контент вкладок
        $tabs.find('.tab-content .tab-pane').removeClass('active');
        $tabs.find(target).addClass('active');

        // Инициализация Slick для слайдера внутри активной вкладки
        var $slickSlider = $tabs.find(target).find('.samal-slider');

        if ($slickSlider.length) {
            if ($slickSlider.hasClass('slick-initialized')) {
                $slickSlider.slick('unslick');
            }

            $slickSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                prevArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-prev"),
                nextArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-next"),
            });
        }
    });
});


$(document).ready(function() {
  // Инициализация слайдера
  function initializeSlider(target) {
      var $slickSlider = $(target).find('.map-slider');
      
      if (!$slickSlider.hasClass('slick-initialized')) {
          $slickSlider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
          });
      }
  }

  // Переключение вкладок
  $('.tab-links2 a').click(function(e) {
      e.preventDefault();

      var target = $(this).attr('href');

      // Переключаем вкладки
      $('.tab-links2 li').removeClass('active');
      $(this).parent().addClass('active');

      // Переключаем контент вкладок
      $('.tab-content .tab-pane2').removeClass('active');
      $(target).addClass('active');

      // Инициализация слайдера внутри выбранной вкладки
      initializeSlider(target);
  });

  // Открытие первой вкладки по умолчанию и инициализация слайдера
  $('.tab-links2 li:first').addClass('active');
  $('.tab-content2 .tab-pane2:first').addClass('active');
  initializeSlider('#tab1'); // Инициализируем слайдер для первой вкладки
});

$(".tab-menu li a").on("click", function (e) {
  e.preventDefault();
  $(this).closest(".tab-menu").find("li").removeClass("active");
  $(this).closest("li").addClass("active");
  var index = $(this).closest("li").index();
  $(".tab-content-item").removeClass("active");
  $(".tab-content-item").eq(index).addClass("active");
});


$(".map-info-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease-in-out",
  speed: 800,
});

$(".info-slider").each(function () {
  $(this).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    speed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });
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


  AOS.init();
});
