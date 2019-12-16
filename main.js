$(document).ready(function(){
   $(".image-slider").slick({
      dots: true,
       arrows:true
   });
   var sliderWidth = $(".slick-slide").width();
   $(".slider-images").css({width: sliderWidth});
});