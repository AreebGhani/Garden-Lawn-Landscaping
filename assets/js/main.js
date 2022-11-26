(function ($) {
 "use strict";
 
/*---------------------
  menu-stick
--------------------- */
var s = $("#sticker");
var pos = s.position();					   
$(window).on('scroll',function() {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
	s.addClass("stick");
	} else {
		s.removeClass("stick");	
	}
});
/*--------------------------
 scrollUp
---------------------------- */	
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'slide'
}); 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
jQuery('.mainmenu nav').meanmenu();	

/*--------------------------
 search
---------------------------- */	
$(".searching-icon").on("click", function(){
	$(".search").toggleClass("active");
});	

/*--------------------------
 venobox
---------------------------- */	
$(document).ready(function(){
    $('.venobox').venobox();
});
/*--------------------------
 counterUp
---------------------------- */	
$('.count1').counterUp({
	delay: 10,
	time: 1000
});	

$('.count2').counterUp({
	delay: 15,
	time: 2000
});

$('.count3').counterUp({
	delay: 20,
	time: 3000
});

$('.count4').counterUp({
	delay: 10,
	time: 4000
});
/*--------------------------
 isotop
---------------------------- */

$(window).on('load',function() {
	
	var layoutMode = 'fitRows';

	if($(window).width() < 992) {
		layoutMode = 'masonry';
	}
	
	$('.project-items').isotope({
		layoutMode: layoutMode,
	});
});

$('.project-nav li').on('click', function(){
	
  $(".project-nav li").removeClass("active");
  $(this).addClass("active");        

	var selector = $(this).attr('data-filter'); 
	$(".project-items").isotope({ 
		filter: selector, 
		animationOptions: { 
			duration: 750, 
			easing: 'linear', 
			queue: false
		} 
	}); 
  return false; 
});
/*--------------------------
 slider
---------------------------- */
$(".slider-items").slick({
	dots: true,
	list:false,
	infinite: true,
	speed: 700,
	slidesToShow: 1,
	adaptiveHeight: true
});
/*--------------------------
 testimonial
---------------------------- */
$(".carousel-one").slick({
  dots: true,
  list:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$(".carousel-two").slick({
  dots: true,
  list:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
/*----------------------------
 price-slider
------------------------------ */  
$( "#slider-range" ).slider({
	range: true,
	min: 40,
	max: 600,
	values: [ 60, 570 ],
	slide: function( event, ui ) {
	$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	}
});
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
" - $" + $( "#slider-range" ).slider( "values", 1 ) );
/*----------------------------
 cart-plus-minus-button
------------------------------ */  
$(".qtybutton").on("click", function() {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();

	if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
	   // Don't allow decrementing below zero
	  if (oldValue > 0) {
		var newVal = parseFloat(oldValue) - 1;
		} else {
		newVal = 0;
	  }
	  }
	$button.parent().find("input").val(newVal);
});
/*----------------------------
 gallery
------------------------------ */ 
$('.slider-for').slick({
  slidesToShow: 1,
  asNavFor: '.slider-nav',
  arrows: true,
  vertical: true,
  swipe:false
});

$('.slider-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  vertical: true,
  swipe:false
  
});
/*---------------------
 countdown
--------------------- */
$('[data-countdown]').each(function() {
	
	var $this = $(this), finalDate = $(this).data('countdown');
	
	$this.countdown(finalDate, function(event) {
	$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	});
	
});

})(jQuery); 