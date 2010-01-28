(function($) {

	$.fn.placeholder = function() {
		if (!$.browser.webkit) {
			var $input_fields = $(this).filter('input[type=text]');
			
			$input_fields
				.val($input_fields.attr('placeholder'))
				.css('color', '#707070');			
				
			$input_fields.focus(function() {
				if ($(this).data("placeholder_original_value") == undefined) {
					$(this).data("placeholder_original_value", $(this).val());
				}
			
				if ($(this).val() == $(this).data("placeholder_original_value")) {
				 	$(this)
						.val('')
						.css('color', '');
				}
			});
			
			$input_fields.blur(function() {
				if ($(this).val() == '') {
					$(this)
						.val($(this).data("placeholder_original_value"))
						.css('color', '#707070');			
				}
			});
		}
	};

})(jQuery);
