$(document).ready(function() {

	'use strict';

	// pages preloader
	$(window).on('load', () =>{
   		$('.preloader').delay(450).fadeOut();
   		$('html, body').delay(500).css({'overflow': 'visible'});
	});

	$(window).on('scroll', () => {

		if ($(window).scrollTop() >= 400) {

			$('.toup-btn').fadeIn();

		} else {

			$('.toup-btn').fadeOut();
		}

	});

	if ($(window).scrollTop() >= 400) {

			$('.toup-btn').fadeIn();

		} else {

			$('.toup-btn').fadeOut();
		}


	$('.toup-btn').on('click', () => {

		$('html, body').animate({

			scrollTop: 0

		});

	});


	// initializing and customize slick slider
	let testmonialsSlider = $('.testimonials-slider'),
		pageDirection = ($('html').attr('dir') == 'rtl') ? true : false,
		nextArrow =  ($('html').attr('dir') == 'ltr') ? 'right' : 'left',
		prevArrow = ($('html').attr('dir') == 'ltr') ? 'left' : 'right';

	testmonialsSlider.slick({
		nextArrow: `<button type="button" class="slick-next"><i class="fas fa-angle-${nextArrow}"></i></button>`,
		prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-angle-${prevArrow}"></i></button>`,
		rtl: pageDirection,
		responsive: [{
			breakpoint: 600, 
			settings: {
				arrows: false,
			}
		}]

	});

	// Custom slick slider arrows btutton
	$('.slick-prev').click(function(){ 
		$(this).parent().find('.slick-slider').slick('slickPrev');
	} );
	
	$('.slick-next').click(function(e){
		e.preventDefault(); 
		$(this).parent().find('.slick-slider').slick('slickNext');
	} );


	// initialize niceSelect plugin 
	$('select').niceSelect();


	// google maps api
	let map;
	function initMap() {
		map = new google.maps.Map(document.getElementById("map"), {
		  center: { lat: -34.397, lng: 150.644 },
		  zoom: 8,
		});
	}
});
