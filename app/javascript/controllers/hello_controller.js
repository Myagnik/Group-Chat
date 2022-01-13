import { Controller } from "@hotwired/stimulus"
import 'semantic-ui-sass'
export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
})


  }
}
