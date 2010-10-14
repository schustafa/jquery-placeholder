(function($) {

  $.fn.placeholder = function(color) {
    var test = document.createElement('input');
    if (!('placeholder' in test)) {
      var color = color || '#a9a9a9';
      
      var $input_fields = $(this).filter('input[type=text]');
			
      $input_fields.each(function() {
        $(this).val($(this).attr('placeholder'))
        $(this).css('color', color);
      });
				
      $input_fields.focus(function() {
        if ($(this).val() == $(this).attr('placeholder')) {
          $(this)
            .val('')
            .css('color', '');
        }
      });
			
      $input_fields.blur(function() {
        if ($(this).val() == '') {
          $(this)
            .val($(this).attr('placeholder'))
            .css('color', color);			
        }
      });
    }
  };

})(jQuery);
