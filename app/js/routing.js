var routing = angular.module('routingModule', ['ui.router']);

routing.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('landing', {
            url: '/',
            template: '<landing-page></landing-page>'
        })
    $locationProvider.html5Mode(true);
})
