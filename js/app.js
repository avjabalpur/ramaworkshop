var app = (function() {
	'use strict';
	return {
		init: function() {
			var	global = this;
			initilizeEffect()
			var target = 'left';
			/*$('input[name="target"]').on('click', function() {
				target = $('input[name="target"]:checked').val();
			});*/

			//$('.nav-position li:first-child input[name="position"]').trigger('click');
			
			/*$('select#pure-effect').on('change', function(e) {
				debugger;
				e.preventDefault();
				var effect = $(this).val(),
					position = $('input[name="position"]:checked').val();

				$('.pure-container').attr('data-effect', effect);
				if(!$('input[name="target"]').length) {
					$('.pure-overlay').attr('data-overlay', position);
					$('.pure-overlay').attr('for', 'pure-toggle-' + position);
				} 

				setTimeout(function(){
					if(!$('input[name="target"]').length) {
						$('.pure-toggle-label[data-toggle-label="' + position + '"]').trigger('click');
					} else {
						$('.pure-toggle-label[data-toggle-label="' + target + '"]').trigger('click');
					}
				}, 500);
			});*/
			
			function initilizeEffect(){
				var effect = 'pure-effect-flipY',
					position = $('input[name="position"]:checked').val();

				//$('.button').removeClass('active');
				//$(this).addClass('active');

				$('.pure-container').attr('data-effect', effect);
				if(!$('input[name="target"]').length) {
					$('.pure-overlay').attr('data-overlay', position);
					$('.pure-overlay').attr('for', 'pure-toggle-' + position);
				} 

				setTimeout(function(){
					if(!$('input[name="target"]').length) {
						$('.pure-toggle-label[data-toggle-label="' + position + '"]').trigger('click');
					} else {
						$('.pure-toggle-label[data-toggle-label="' + target + '"]').trigger('click');
					}
				}, 500);
				
			}

			$('.menu-link').on('click', function(e) {
				var effect = 'pure-effect-flipY',
					position = 'right';
				$('.button').removeClass('active');
				$(this).addClass('active');
				$('.pure-container').attr('data-effect', effect);
				$('.pure-toggle-label[data-toggle-label="' + position + '"]').trigger('click');
			});

			
			/*$('.button[data-effect]').not('.disabled').on('click', function(e) {
				e.preventDefault();
				var effect = $(this).attr('data-effect'),
					position = $('input[name="position"]:checked').val();

				$('.button').removeClass('active');
				$(this).addClass('active');

				$('.pure-container').attr('data-effect', effect);
				if(!$('input[name="target"]').length) {
					$('.pure-overlay').attr('data-overlay', position);
					$('.pure-overlay').attr('for', 'pure-toggle-' + position);
				} 

				setTimeout(function(){
					if(!$('input[name="target"]').length) {
						$('.pure-toggle-label[data-toggle-label="' + position + '"]').trigger('click');
					} else {
						$('.pure-toggle-label[data-toggle-label="' + target + '"]').trigger('click');
					}
				}, 500);
			});*/
			$('.icon-cross').on('click', function(e) {
				$(this).parent().fadeOut();
			});
			//$('.pure-pusher').stellar({ 
			//	horizontalScrolling: false 
			//});
			$('.icon-browser').on('click', function(e) {
				debugger;
				e.preventDefault();
				var scrollTo = $('#demo').offset().top;
				$('.pure-pusher').animate({
				    scrollTop: scrollTo
				}, 1000);
			});
			$('.nav-documentation a').on('click', function(e) {
				debugger;
				e.preventDefault();
				var id = $(this).attr('href').substr(1, $(this).attr('href').length),
					scrollTo = $('#' + id).offset().top;
				$('.pure-pusher').animate({
				    scrollTop: scrollTo
				}, 1000);
			});
			//$.scrollIt();
			
			//new WOW().init();
		}
	};

})();

(function() {

	'use strict';

	app.init();

})();
