import { Application } from "@hotwired/stimulus"
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

$(document).ready(function(){ console.log("kai po che")});
export { application }
