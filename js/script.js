/*------------ animate.reset  Start ------------*/
new WOW().init();
/*------------ animate.reset  End ------------*/

jQuery(document).ready(function($) {
	/*------------ slick Start ------------*/
	$('.slide-container').slick({
		dots: false,
		arrows: false,
		infinite: true, //loop
		speed: 500,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		}, {
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});
	/*------------ slick End ------------*/

	/*------------ hamb Start ------------*/
	$('.hamb').on('click', function() {
		if($(window).width() < 841) {
			if($('body').hasClass('hidden')) {
				$('body').removeClass('hidden');
				$(this).siblings('.menu').slideUp(600);
			} else {
				$('body').addClass('hidden');
				$(this).siblings('.menu').slideDown(600);
			}
		}
	});
	/*------------ hamb End ------------*/

	$('footer a').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});
});