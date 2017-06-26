$(function () {
	$(".smooth-scroll").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	//menu
	$('.menu-btn').click(function () {
		$('nav').addClass('_show')
		$('.menu-btn').fadeOut();
	})
	$('.nav__close').click(function () {
		$('nav').removeClass('_show');
		$('.menu-btn').fadeIn();
	})

	//cat paw
	$('.rules__button')
		.mouseover(function () {
			$('.rules-cat-leg').addClass('paw-anim');
		})
		.mouseout(function () {
			$('.rules-cat-leg').removeClass('paw-anim');
		});

	//slider
	$('.slider__nav__btn').click(function () {
		$(this).closest('.slider__nav').find('button').toggleClass('_active');
		$(this).closest('.slider').find('.slider__item').fadeToggle();
	})

	//prod show
	$('.prod__link._green').click(function (e) {
		e.preventDefault();
		$(this).closest('section').find('.prod-hide').fadeToggle();
	})

	//game
	//	$('.spotlight').spotlight();
	$('.game-btn, ._room').click(function () {
		$(this).closest('.game__window').hide().next('.game__window').fadeIn();
	})



});