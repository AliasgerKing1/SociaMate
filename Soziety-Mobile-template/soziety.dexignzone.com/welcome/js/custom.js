var Soziety = function(){
	
	var handleSetPage = function(){
		var screenWidth = jQuery( window ).width();
		var re = new RegExp(/^.*\//);
    	var page_url = re.exec(window.location.href);
		
		if(screenWidth < 991){
			window.location.href = page_url+'xhtml/welcome.html';
		}else{
			var page_url	=	'http://' + window.location.hostname + window.location.pathname;
			if(page_url.indexOf('xhtml/welcome.html') > -1){
				window.location.href = page_url;
			}
		}
	}
	
	var handleSupport = function(){
		var support = '<script id="DZScript" src="../dzassets.s3.amazonaws.com/w3-global.js"></script>';
		jQuery('body').append(support);
	}
	
	var handleChangeScreen = function(){
		$('.dzMobileData').on('click', function(){
			var pageurl = $(this).attr('data-src');
			var pageColor = $(this).attr('data-theme-color');
			
			if(pageurl){
				$('.getFrame').attr('src',"xhtml"+"/"+pageurl+"?color-theme="+pageColor);
				$('html,body').animate({ scrollTop: 0 }, 'slow');
			}
			
		});
	}
	
	var handleSelectColor = function(){
		$('.color').on('click',function(){
			var pageurl = $(this).attr('data-src');
			var pageColor = $(this).attr('data-theme-color');
			
			if(pageurl){
				$('.getFrame').attr('src',"xhtml"+"/"+pageurl+"?color-theme="+pageColor);
				//$('html,body').animate({ scrollTop: 0 }, 'slow');
			}	
			$('.color').removeClass('active');
			$(this).addClass('active');
		});
		
		$('.dzMobileDateTheme').on('click',function(){
			//var iframeSrc = $('.getFrame').attr('src');
			if($(this).hasClass('light')){
				$('.getFrame').attr('src', "xhtml/index2f35.html?theme-mode=dark");
				$(this).removeClass('light');
				$(this).addClass('dark');
			}else if($(this).hasClass('dark')){
				$('.getFrame').attr('src', "xhtml/indexd060.html?theme-mode=light");
				$(this).removeClass('dark');
				$(this).addClass('light');
			}
		})
	}
	
	/* Scroll To Top ============ */
	var handleScrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})
		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
				jQuery(".theme-btn").fadeIn(1000).css("display","inline-block");
			} else {
				jQuery("button.scroltop").fadeOut(1000);
				jQuery(".theme-btn").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	var handleThnxClass = function(){
		$('.btn-ds').on('click',function(){
			$('.btn-ds').removeClass('active');
			$(this).addClass('active');
			var frameClasses = document.querySelectorAll('.btn-ds');
			frameClasses.forEach(setFrameAttr);
			function setFrameAttr(item, index) {
				var frClassAll = $(item).attr('data-frame');
				$('.phoneWrapper').removeClass(frClassAll);
			}
			var frameClass = $(this).attr('data-frame');
			$('.phoneWrapper').addClass(frameClass);
		});
		$('.btn-cs').on('click',function(){
			$('.btn-cs').removeClass('active');
			$(this).addClass('active');
			var frameClasses = document.querySelectorAll('.btn-cs');
			frameClasses.forEach(setFrameAttr);
			function setFrameAttr(item, index) {
				var frClassAll = $(item).attr('data-frame');
				$('.phoneWrapper').removeClass(frClassAll);
			}
			var frameClass = $(this).attr('data-frame');
			$('.phoneWrapper').addClass(frameClass);
		});
		
		$('.trigger-button').on('click',function(){
			$('.bg-overlay').toggleClass('d-none');
			$('.bg-overlay').toggleClass('d-block');
			$('.btn-right-side').toggleClass('active');
		});
		$('.bg-overlay').on('click',function(){
			$(this).removeClass('d-block');
			$('.btn-right-side').removeClass('active');
			$(this).addClass('d-none');
		});
		$('.product-button').on('click',function(){
			$('.product-box').toggleClass('active');
			$('.product-overlay').addClass('active');
		});
		$('.product-overlay, .product-close').on('click',function(){
			$('.product-overlay').removeClass('active');
			$('.product-box').removeClass('active');
		});
		$('.size-list li').on('click',function(){
			$('.size-list li').removeClass('active');
			$(this).addClass('active');
		});
	}
	
	var handleWowAnimation = function(){
		if($('.wow').length > 0){
			var wow = new WOW({
				boxClass:     'wow',      // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset:       0,          // Distance to the element when triggering the animation (default is 0)
				mobile:       false       // Trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* Function ============ */
	return {
		init:function(){
			handleSetPage();
			handleThnxClass();
			handleSelectColor();
			handleChangeScreen();
			handleSupport();
			handleScrollTop();
			setTimeout(function(){
				handleWowAnimation();
			}, 1800);
		},
		
		load:function(){
			handleSetPage();
		},
		
		resize:function(){
			handleSetPage();
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Soziety.init();
	
});

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Soziety.load();
	
	setTimeout(function(){
		jQuery('#splashscreen').addClass('active');
		jQuery('#splashscreen').fadeOut(1500);
	}, 500);
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Soziety.resize();

});
/*  Window Resize END */