(function($) {
    $.fn.teucer = function(container, callback) {
        var clickable  = this.path;
        var $container = $(container);
        var $link      = this;
        var url        = this.attr('href') ? this.attr('href') : this.data('teucer');

        //event listener
        $('body').on('click', clickable, function(e) {
          $container.addClass('loading');

          $.get(url, function(result) {
              var $result = $(result);
              var $newContainer = $(container, $result);
              $container.html($newContainer.html());
              callback();
          });

          $container.removeClass('loading');
          e.preventDefault();
        });

        return this;
    };
}(jQuery));
