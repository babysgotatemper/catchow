
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
				setMask(event.pageX - 200, event.pageY - 200);
			}

			function setMask(x, y) {
				mskX = x + 'px';
				mskY = y + 'px';
				document.getElementById('bdr').style.left = mskX;
				document.getElementById('bdr').style.top = mskY;
				document.getElementById('r2').setAttribute('style', "mask-position-x:" + mskX + "; -moz-mask-position-x:" + mskX + "; -webkit-mask-position-x:" + mskX + ";  mask-position-y: " + mskY + ";  -moz-mask-position-y: " + mskY + ";  -webkit-mask-position-y: " + mskY + ";");
			}
			var el = document.getElementById('bdr');
			el.addEventListener("touchstart", handleStart, false);
			//el.addEventListener("touchend", handleEnd, false);
			//el.addEventListener("touchcancel", handleCancel, false);
			el.addEventListener("touchmove", handleMove, false);

			function handleStart(e) {
				setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
			}

			function handleMove(e) {
				setMask(e.changedTouches[e.changedTouches.length - 1].pageX - 100, e.changedTouches[e.changedTouches.length - 1].pageY - 100);
			}

		}
	
		try {
			var AG_onLoad = function(func) {
				if (document.readyState === "complete" || document.readyState === "interactive") func();
				else if (document.addEventListener) document.addEventListener("DOMContentLoaded", func);
				else if (document.attachEvent) document.attachEvent("DOMContentLoaded", func)
			};
			var AG_removeElementById = function(id) {
				var element = document.getElementById(id);
				if (element && element.parentNode) {
					element.parentNode.removeChild(element);
				}
			};
			var AG_removeElementBySelector = function(selector) {
				if (!document.querySelectorAll) {
					return;
				}
				var nodes = document.querySelectorAll(selector);
				if (nodes) {
					for (var i = 0; i < nodes.length; i++) {
						if (nodes[i] && nodes[i].parentNode) {
							nodes[i].parentNode.removeChild(nodes[i]);
						}
					}
				}
			};
			var AG_each = function(selector, fn) {
				if (!document.querySelectorAll) return;
				var elements = document.querySelectorAll(selector);
				for (var i = 0; i < elements.length; i++) {
					fn(elements[i]);
				};
			};
			var AG_removeParent = function(el, fn) {
				while (el && el.parentNode) {
					if (fn(el)) {
						el.parentNode.removeChild(el);
						return;
					}
					el = el.parentNode;
				}
			};
			var AdFox_getCodeScript = function() {};
			AG_onLoad(function() {
				AG_each('iframe[id^="AdFox_iframe_"]', function(el) {
					if (el && el.parentNode) {
						el.parentNode.removeChild(el);
					}
				});
			});
			try {
				Object.defineProperty(window, 'noAdsAtAll', {
					get: function() {
						return true;
					}
				});
			} catch (ex) {}
		} catch (ex) {
			console.error('Error executing AG js: ' + ex);
		}