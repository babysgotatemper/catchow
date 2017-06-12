$(function() {
	
	//slider
	$('.slider__nav__btn').click(function(){
		$(this).closest('.slider__nav').find('button').toggleClass('_active');
		$(this).closest('.slider').find('.slider__item').slideToggle();
	})
	
	
});
