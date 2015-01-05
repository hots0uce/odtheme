

(function($,doc){

	exports.init = function() {

		var win = $(window),
			resize = function() {
				var height = window.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight;
				$('.section').not('.header').css('min-height',height);
			};

		resize();

		win.on('resize',resize);
	};

}(jQuery,document));