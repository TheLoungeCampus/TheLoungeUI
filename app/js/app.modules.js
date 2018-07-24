// Top level modules, collecting all app modules into one.
// Require necessary files here
require('./routing');
require('./directives/directives.modules.js');
require('./themes');

angular.module('theLoungeModule', [
    'directivesModule',
    'routingModule',
    'ngMaterial',
    'themesModule'
])
.run(['$state', '$rootScope', function($state, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        // If user is not logged in, redirect them to /login here...
    })
}])
