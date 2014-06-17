(function($) {
  $.fn.teucer = function(container, callback) {
    var clickable  = this.selector;

    //event listener
    $('body').on('click', clickable, function(e) {
      var $this = $(this);
      var url = $this.attr('href') ? $this.attr('href') : $this.data('teucer');
      var $container = $(container);
      $container.addClass('loading');

      $.get(url, function(result) {
        var $newContainer = $(container, result);
        $container.html($newContainer.html());
        $container.removeClass('loading');
        if(callback) { callback() };
      });

      e.preventDefault();
    });

    return this;
  };
}(jQuery));

