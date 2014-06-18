(function($) {
  $.fn.teucer = function(container, callback) {
    var selector  = this.selector;

    //event listener
    $('body').on('click', selector, function(e) {
      var $this      = $(this);
      var url        = $this.attr('href') ? $this.attr('href') : $this.data('teucer');
      var $container = $(container);
      $container.addClass('loading');

      $.get(url, function(result) {
        var $newContainer = $(container, result);
        var newTitle      = $(result).attr('title');

        $container.html($newContainer.html());
        $(document).attr('title', newTitle);

        $container.removeClass('loading');
        if(callback) { callback() };
      });

      e.preventDefault();
    });

    return this;
  };
}(jQuery));

