// Top level modules, collecting all app modules into one.
// Require necessary files here
require('./routing');
require('./directives/directives.modules.js');

angular.module('theLoungeModule', [
    'directivesModule',
    'routingModule',
    'ngMaterial'
])
