import "controllers"
// import * as ActiveStorage from "@rails/activestorage"
import "../channels"
import 'jquery'

$(document).ready(function(){
  console.log("oopsps")
  // $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
});
  
 