// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'semantic-ui'
import "channels"

window.jQuery = jquery
window.$ = jquery

alert("This javascript thing is reals making me mad!");

import "./channels"
