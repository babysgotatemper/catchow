$(function() {
	
	//manu
	$('.menu-btn').click(function(){
		$('nav').addClass('_show')
		$('.menu-btn').fadeOut();
	})
	$('.nav__close').click(function(){
		$('nav').removeClass('_show');
		$('.menu-btn').fadeIn();
	})
	
	//slider
	$('.slider__nav__btn').click(function(){
		$(this).closest('.slider__nav').find('button').toggleClass('_active');
		$(this).closest('.slider').find('.slider__item').fadeToggle();
	})
	
	
});
