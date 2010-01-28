(function($) {

  $.fn.placeholder = function(color) {
    if (!$.browser.webkit) {
      var color = color || '#a9a9a9';

      var $input_fields = $(this).filter('input[type=text]');
			
      $input_fields
        .val($input_fields.attr('placeholder'))
        .css('color', color);			
				
      $input_fields.focus(function() {
        if ($(this).data("placeholder_text") == undefined)
          $(this).data("placeholder_text", $(this).val());
			
        if ($(this).val() == $(this).data("placeholder_text")) {
          $(this)
            .val('')
            .css('color', '');
        }
      });
			
      $input_fields.blur(function() {
        if ($(this).val() == '') {
          $(this)
            .val($(this).data("placeholder_text"))
            .css('color', color);			
        }
      });
    }
  };

})(jQuery);
