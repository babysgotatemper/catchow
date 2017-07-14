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
	$('.rules-cat')
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
	var $gameWindow;

	$('.game-btn').click(function () {
		//		gameTop();
		$(this).closest('.game__window').hide().next('.game__window').fadeIn();
		panagination();
	});

	//	function gameTop(){
	//		$('html, body').animate({
	//			scrollTop: $('.game__window').offset().top
	//		}, 500);
	//	}


	$('.game__pack').click(function () {
		$gameWindow = $(this).closest('.game__window')
		$gameWindow.find('.room-bg._bot, .bdr').fadeOut(600);
		$gameWindow.find('svg').hide();
		$gameWindow.find('.room-bg._top').css("mask-image", "none");
		$gameWindow.find('.game__pack').addClass('_center');

		setTimeout(function () {
			$gameWindow.addClass('_text');
		}, 2000);


	});

	var panNum = 0;

	function panagination() {
		panNum++;
		$('.panagination__item._' + panNum + '').addClass('_active');
	}

	$('.game-gender').click(function () {
		$('.game-gender').removeClass('_active')
		$(this).addClass('_active')
	})
	$('.game-sex').click(function () {
		$('.game-sex').removeClass('_active')
		$(this).addClass('_active')
	});

	$('#rules-check').click(function () {
		$('#block').fadeToggle();
		console.log('zsdbgz');
	});

	//form submit
	$('[type="submit"]').click(function(){
		if(1){
			$('.game__window._succes').fadeIn();
		}else{
			$('.game__window._unsucces').fadeIn();
		}
	});
	$('.hide').click(function(){
		$(this).closest('.game__window').hide();
	});

});


function init() {
	var gameWindowY = $(".game__window").offset().top;
	var gameWindowX = $(".game__window").offset().left;

	//mobile
	$(".game__window").on( "vmousemove", function(event) {
		letsMove(event);
	});
	
	$(".game__window").mousemove(function (event) {
		letsMove(event);
	});
	
	function letsMove(event){
		var x = event.pageX;
		var y = event.pageY;

		mskX = x - gameWindowX - 100 + 'px';
		mskY = y - gameWindowY - 105 + 'px';

		$('#svgmask1_image').attr({x: mskX,	y: mskY});
		$('#svgmask2_image').attr({x: mskX,	y: mskY});
		$('#svgmask3_image').attr({x: mskX,	y: mskY});
		$('#svgmask4_image').attr({x: mskX,	y: mskY});

		$('.bdr').css({"left": mskX, "top": mskY});
		$('.room-bg._top').css({"mask-position-x": mskX, "mask-position-y": mskY})		
	}
}
//test


function move(e) {
    $element.css({
        left: (e.pageX - 10) + 'px',
        top: (e.pageY - 10) + 'px',
        cursor: 'pointer'
    });
}
