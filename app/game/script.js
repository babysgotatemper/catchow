//$(document).ready(function () {
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
			setMask(event.pageX - 350, event.pageY - 150);
		}

		function setMask(x, y) {
			mskX = x + 'px';
			mskY = y + 'px';
			document.getElementById('bdr').style.left = mskX;
			document.getElementById('bdr').style.top = mskY;
//			document.getElementById('r2').setAttribute('style', "mask-position-x:" + mskX + "; -moz-mask-position-x:" + mskX + "; -webkit-mask-position-x:" + mskX + ";  mask-position-y: " + mskY + ";  -moz-mask-position-y: " + mskY + ";  -webkit-mask-position-y: " + mskY + ";");
			$('.room__bot').css({
				"mask-position-x": mskX,
				"-moz-mask-position-x": mskX,
				"-webkit-mask-position-x": mskX,
				"mask-position-y": mskY,
				"-moz-mask-position-y": mskY,
				"-webkit-mask-position-y": mskY,
			})
		}
		var el = $('#bdr');
		el.addEventListener("touchstart", handleStart, false);
		el.addEventListener("touchmove", handleMove, false);

		function handleStart(e) {
			setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
		}

		function handleMove(e) {
			setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
		}

	}

$('.room__prod').click(function(){
	$(this).closest('.room').fadeOut();
})

//});
