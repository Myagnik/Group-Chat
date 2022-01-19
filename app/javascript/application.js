// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'semantic-ui'
import "channels"

// window.jQuery = jquery
// window.$ = jquery

  $(document).on('turbo:load', function() {
    alert("kkejwnfjwe");
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
          $('button').click();
          e.target.value = "";
        };
      });
    $('.ui.dropdown').dropdown();
   $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  })
import "channels"
