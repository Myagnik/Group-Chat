// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'semantic-ui'
import "channels"

// window.jQuery = jquery
// window.$ = jquery

  $(document).on('turbo:load', function() {
   
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
          $('button').click();
          e.target.value = "";
        };
      });
    $(".close.icon").click(function(){
        $(this).parent().hide();
      });
      $('.ui.dropdown').dropdown();
  })
import "channels"
