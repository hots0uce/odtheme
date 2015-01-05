(function(win,$) {
	win = $(win);
	exports.init = function() {
		win.on('scroll',function(e) {
			if(document.body.scrollTop <= 0) {
				$('.header-wrapper').removeClass('shadow');
			}else{
				$('.header-wrapper').addClass('shadow');
			}
		});
	};
}(window,jQuery));