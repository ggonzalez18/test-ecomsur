  $(document).ready(function() {
      $('a[href^="#"]').on('click', function(e) {
          e.preventDefault();
          let target = this.hash;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 80
          }, 1500)
      });
  });