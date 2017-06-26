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


function init() {
	document.onmousemove = handleMouseMove;

	function handleMouseMove(event) {
		var dot, eventDoc, doc, body, pageX, pageY;

		event = event || window.event; // IE-ism

		if (event.pageX == null && event.clientX != null) {
			eventDoc = (event.target && event.target.ownerDocument) || document;
			doc = eventDoc.documentElement;
			body = eventDoc.body;

			event.pageX = event.clientX +
				(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
				(doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY +
				(doc && doc.scrollTop || body && body.scrollTop || 0) -
				(doc && doc.clientTop || body && body.clientTop || 0);
		}
		setMask(event.pageX - 330, event.pageY - 200);
	}

	function setMask(x, y) {
		mskX = x + 'px';
		mskY = y + 'px';
		$('.bdr').css({
			"left": mskX,
			"top": mskY
		});
		$('.game__elem._bot').css({
			"mask-position-x": mskX,
			"mask-position-y": mskY
		})
	}

	var el = $('.bdr');
	el.addEventListener("touchstart", handleStart, false);
	el.addEventListener("touchmove", handleMove, false);

	function handleStart(e) {
		setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
	}

	function handleMove(e) {
		setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
	}

}
