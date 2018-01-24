$('.carousel').carousel({
    interval: 5000
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$('.btn_menu,.box-btn_menu').mouseenter(function () {
    $('.box-shadow').show();
});
$('.dropdown_content').mouseleave(function(){
    $('.box-shadow').hide(); 
  });

// top header 
var lastScrollTop = 10;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
      // downscroll code
      //$('.small-header, .tes').slideUp("fast");
      $('.header').addClass('sticky-header');
   } else {
      // upscroll code
      //$('.small-header, .tes').slideDown("fast");
      $('.header').removeClass('sticky-header');
   }
});

/* acordion
$('.toggle').click(function(e) {
    e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .menu-child').removeClass('show');
      $this.parent().parent().find('li .menu-child').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
}); */
// hover image
$(function () {
    var $preview = $("#img-product");

    $("ul.menu_dropdown__content a").hover(function () {
        $preview.attr("src", $(this).attr("data-thumbnail-src"));
    }, function () {
        $preview.attr("src", "images/gambar-motivasi.jpg");
    });
});