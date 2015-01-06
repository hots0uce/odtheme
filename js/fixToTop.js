exports.init = function() {

	(function(win,$) {
		win = $(win);
		win.on('scroll',function(e) {
			if(document.body.scrollTop <= 0) {
				$('.header-wrapper').removeClass('shadow');
			}else{
				$('.header-wrapper').addClass('shadow');
			}
		});
	}(window,jQuery));

}