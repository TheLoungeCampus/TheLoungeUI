var login = angular.module('login.directive', []);

login.directive('loginPage', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/login.html',
        controller: function($scope) {
            $scope.test = "test";
            $scope.navToLogin = function() {
                console.log('logging in...')
            }
        }
    }
});
