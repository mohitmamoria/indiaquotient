"use strict";

//Modernizr touch detect
Modernizr.load({
	test: Modernizr.touch,
	yep :['css/touch.css'],
	nope: ['js/waypoints.js'],
	complete : function () {
		if (Modernizr.touch){
			//initMobile

			$('.z-nav__list > .z-nav__item:has(.z-nav__list-secondary) > .z-nav__link').click(function(e){
				if ($(window).width() > 769) {
					e.preventDefault();
				};
			});

			$(".animationload").delay(1000).fadeOut("slow");
		}							 
		else{
			//initDesc
			
			//Animated header positioning
			var $head = $( '.header-fixed' );
			$( '.waypoint' ).each( function(i) {
				var $el = $( this ),
				animClassDown = $el.data( 'animateDown' ),
				animClassUp = $el.data( 'animateUp' );

				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown) {
						$head.attr('class', 'header-fixed ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp){
						$head.attr('class', 'header-fixed ' + animClassUp);
					}
				}, { offset: -250 });
			});	
		}
	}  
});

//Test if classList exist
var test = false;
if ("document" in self && !("classList" in document.createElement("_"))){
	test = true;
}

Modernizr.load({
	test: test,
	yep : ['js/classList.js'],
	nope: []
});

//Plaeholder handler
if(!Modernizr.input.placeholder){             //placeholder for old brousers and IE

	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();

	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
}

// Init for all template pages
$(document).ready(function() {
	$('.z-nav__list').mobileMenu({
		triggerMenu:'.z-nav__toggle',
		subMenuTrigger: ".z-nav__toggle-sub",
		animationSpeed:500	
	});

	$('.z-nav__toggle').on('mousedown touchstart', function (){
		$('.z-nav__toggle').toggleClass('open-nav');
		var $mobileNav = $('.z-nav__list');
		var $cart = $('.cart__list');
		var $cartToggle = $('.cart__toggle');

		if($mobileNav.hasClass('open-nav')){
			$mobileNav.removeClass('open-nav close-nav');
			$mobileNav.addClass('close-nav');
		}
		else{
			$mobileNav.removeClass('open-nav close-nav');
			$mobileNav.addClass('open-nav');

			$cart.removeClass('open-nav close-nav');
			$cart.addClass('close-nav');
			$cartToggle.removeClass('open-nav close-nav');
			$cartToggle.addClass('close-nav');
		}
	});

   // hide .top-scroll first
   $(".top-scroll").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('.top-scroll').fadeIn(500);
			} else {
				$('.top-scroll').fadeOut(500);
			}
		});

		// scroll body to 0px on click
		$('.top-scroll').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	// mega menu
	if($(".mega-menu").length==0){
		return 0;
	} else {
		$(".mega-menu").parent().addClass('skip-element');
	}

});

$(window).resize(function (){
	if (window.innerWidth > 768 ) {
		$('.z-nav__list').removeClass('close-nav');
	};
})

//Function section

//Start function
function sliderSides () {

				//Swiper init
				var prevContainer = $('.leftside-arrow .img-prev');
				var nextContainer = $('.rightside-arrow .img-next');
				var prevName = $('.leftside-arrow .arrow-heading');
				var nextName = $('.rightside-arrow .arrow-heading');
				

				// Side arrow carousel
				var carouselSwiper = $('.carousel-sides').swiper({
					slidesPerView:4,
					loop: true,
					speed: 600
				});

				var slideArray = $('.carousel-sides .swiper-slide');

				function previewPrev(){
					var prevImg = slideArray.eq(carouselSwiper.activeIndex - 1).attr('data-src');
					var nextImg = slideArray.eq(carouselSwiper.activeIndex + carouselSwiper.params.slidesPerView).attr('data-src');
					var prevHead = slideArray.eq(carouselSwiper.activeIndex - 1).attr('data-head');
					var nextHead = slideArray.eq(carouselSwiper.activeIndex + carouselSwiper.params.slidesPerView).attr('data-head');

					prevContainer.attr('src', prevImg);
					nextContainer.attr('src', nextImg);
					prevName.text(prevHead);
					nextName.text(nextHead);
				}

				function previewNext(){
					var prevImg = slideArray.eq(carouselSwiper.previousIndex).attr('data-src');
					var nextImg = slideArray.eq(carouselSwiper.previousIndex + carouselSwiper.params.slidesPerView+1).attr('data-src');
					var prevHead = slideArray.eq(carouselSwiper.previousIndex).attr('data-head');
					var nextHead = slideArray.eq(carouselSwiper.previousIndex + carouselSwiper.params.slidesPerView+1).attr('data-head');

					prevContainer.attr('src', prevImg);
					nextContainer.attr('src', nextImg);
					prevName.text(prevHead);
					nextName.text(nextHead);
				}

				//init slider navigation arrow

				$('.leftside-arrow').on('click', function(e){
					e.preventDefault();
					carouselSwiper.swipePrev();
					
					previewPrev();
				});

				$('.rightside-arrow').on('click', function(e){
					e.preventDefault();
					carouselSwiper.swipeNext();

					previewNext();
				});

				//Start arrow contant init	
				previewPrev();



				var displayWidth = $(window).width();

				switch (true) {
					case (displayWidth>992):
					carouselSwiper.params.slidesPerView=4;
					carouselSwiper.resizeFix();   
					break;
					case (displayWidth>640 && displayWidth<=992):
					carouselSwiper.params.slidesPerView=3;
					carouselSwiper.resizeFix();
					break;
					case (displayWidth>400 && displayWidth<=640):
					carouselSwiper.params.slidesPerView=2;
					carouselSwiper.resizeFix();
					break;
					case (displayWidth<=400):
					carouselSwiper.params.slidesPerView=1;
					carouselSwiper.resizeFix();
					break;
				}

					//Resize detect
					$(window).resize(function(){
						var displayWidth = $(window).width();

						switch (true) {
							case (displayWidth>992):
							carouselSwiper.params.slidesPerView=4;
							carouselSwiper.reInit();  
							break;
							case (displayWidth>640 && displayWidth<=992):
							carouselSwiper.params.slidesPerView=3;
							carouselSwiper.reInit();
							break;
							case (displayWidth>400 && displayWidth<=640):
							carouselSwiper.params.slidesPerView=2;
							carouselSwiper.reInit();
							break;
							case (displayWidth<=400):
							carouselSwiper.params.slidesPerView=1;
							carouselSwiper.reInit();
							break;
						}
					});
				}
//end function

//Start function
function sliderSidesAdvanced() {

	sliderSides();

	var slidesSlides = $('.carousel-sides .swiper-slide');
	var sliderInfo = $('.slider-information__item');

	slidesSlides.on('click', function(e) { e.preventDefault(); });

	slidesSlides.mouseenter(function (e){
		slidesSlides.removeClass('carousel-slide-active');
		$(this).addClass('carousel-slide-active');

		var sidesFilter = $(this).attr('data-head').toLowerCase();

		sliderInfo.hide(0);
		$('.' + sidesFilter).show(0);
	}).mouseleave(function(){ slidesSlides.removeClass('carousel-slide-active'); });
}
//end function

//Start function
function tooltips() {
	$('.tooltip-link').tooltip();
}
//end function