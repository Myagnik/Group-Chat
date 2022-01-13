import { Application } from "@hotwired/stimulus"
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .
console.log("Shhhh");
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  })
export { application }
