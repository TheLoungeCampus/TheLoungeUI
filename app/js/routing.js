var routing = angular.module('routingModule', ['ui.router']);

routing.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('landing', {
            url: '/',
            template: '<landing-page></landing-page>'
        })
        .state('login', {
            url: '/login',
            template: '<login-page></login-page>'
        })
        .state('home', {
            url: '/home',
            template: '<home-page></home-page>'
        })
    $locationProvider.hashPrefix(''); // by default '!'
    $locationProvider.html5Mode(true);
})
