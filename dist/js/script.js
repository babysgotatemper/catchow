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



});


function init() {
	var gameWindowY = $(".game__window").offset().top;
	var gameWindowX = $(".game__window").offset().left;
	$(".game__window").mousemove(function (event) {
		var x = event.pageX;
		var y = event.pageY;

		mskX = x - gameWindowX - 100 + 'px';
		mskY = y - gameWindowY - 105 + 'px';

		$('#svgmask1_image').attr({
			x: mskX,
			y: mskY
		});
		$('#svgmask2_image').attr({
			x: mskX,
			y: mskY
		});
		$('#svgmask3_image').attr({
			x: mskX,
			y: mskY
		});
		$('#svgmask4_image').attr({
			x: mskX,
			y: mskY
		});

		$('.bdr').css({
			"left": mskX,
			"top": mskY
		});
		$('.room-bg._top').css({
			"mask-position-x": mskX,
			"mask-position-y": mskY
		})
	});
}


//function init() {
//    document.onmousemove = handleMouseMove;
//
//    function handleMouseMove(event) {
//        var dot, eventDoc, doc, body, pageX, pageY;
//
//        event = event || window.event; // IE-ism
//
//        if (event.pageX == null && event.clientX != null) {
//            eventDoc = (event.target && event.target.ownerDocument) || document;
//            doc = eventDoc.documentElement;
//            body = eventDoc.body;
//
//            event.pageX = event.clientX +
//                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//                (doc && doc.clientLeft || body && body.clientLeft || 0);
//            event.pageY = event.clientY +
//                (doc && doc.scrollTop || body && body.scrollTop || 0) -
//                (doc && doc.clientTop || body && body.clientTop || 0);
//        }
//        setMask(event.pageX - 0, event.pageY - 0);
//    }
//
//    function setMask(x, y) {
//        mskX = x + 'px';
//        mskY = y + 'px';
//        $('.bdr').css({
//            "left": mskX,
//            "top": mskY
//        });
//        $('.room-bg._top').css({
//            "mask-position-x": mskX,
//            "mask-position-y": mskY
//        })
//    }
//
//    var el = $('.bdr');
//    el.addEventListener("touchstart", handleStart, false);
//    el.addEventListener("touchmove", handleMove, false);
//
//    function handleStart(e) {
//        setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
//    }
//
//    function handleMove(e) {
//        setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
//    }
//
//}
