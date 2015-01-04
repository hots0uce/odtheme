(function(win) {

	exports.init  = function() {
		$('.nav').on('click.nav-scroll-to','a',function(e) {
			
			if($(e.target.hash).length) {
				e.preventDefault();
				var target;
				if(e.target.hash != '#top') {
						target = $(e.target.hash).offset().top - 90;	
				}else{
					target = 0;
				}

				if(e.target.hash == '#about') {
					target -= 100;
				}

				$('html,body').animate({
		          scrollTop: target
		        }, 500);
		    }
		});
	}

}(window));