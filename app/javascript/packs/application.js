import "controllers"
import * as ActiveStorage from "@rails/activestorage"
import "./channels"
import 'jquery'
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

alert("This javascript thing is reals making me mad!");
$(document).ready(function(){
  console.log("oopsps")
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
});
  
 