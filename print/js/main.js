$('.carousel').carousel({
    interval: 5000
})

$('.btn_menu').mouseenter(function () {
    $('.box-shadow').show();
});
$('.dropdown_content').mouseleave(function(){
    $('.box-shadow').hide(); 
  });