// scroll animation
$(window).scroll(function () {
    var wd = $(window).width();
    var sc = $(window).scrollTop();
    if (sc > 60 && wd >= 769) {
        $('.header').addClass('header--scroll');
        $('.header').css('padding', '12px 10%');
    } else {
        if (wd >= 769) {
            $('.header').removeClass('header--scroll');
            $('.header').css('padding', '25px 10%');
        }
    }
});

// slick slider
$(document).ready(function(){
    $('.promo__banner-content').slick({
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
    $('.slick-track').css('padding', '20px 0');
});