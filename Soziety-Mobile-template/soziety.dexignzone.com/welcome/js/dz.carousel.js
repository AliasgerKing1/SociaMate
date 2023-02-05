/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/*  Team Carousel = owl.carousel.js */
	jQuery('.mobile-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoplaySpeed: 3000,
		navSpeed: 1000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: true,
		dots: true,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},			
			
			767:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/*  Product Carousel = owl.carousel.js */
	jQuery('.product-carousel').owlCarousel({
		loop:false,
		margin:30,
		nav:false,
		//autoplaySpeed: 3000,
		//navSpeed: 1000,
		//paginationSpeed: 3000,
		//smartSpeed: 3000,
		//slideSpeed: 3000,
        autoplay: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},			
			767:{
				items:4
			},
			1280:{
				items:5
			},
			1400:{
				items:6
			},
			1680:{
				items:7
			},
		}
	})
	
});
/* Document .ready END */