var landingpage = angular.module('landingpage.directive', []);

landingpage.directive('landingPage', function() {
    return {
        templateUrl: 'views/landingpage.html',
        controller: function($scope, $state) {
            $scope.header = "Make money your way.";
            $scope.message = "The Lounge is a place for students to share their " +
                "talents and become freelancers on campus. Whether you're looking " +
                "for affordable services and products or to make some extra money " +
                "doing what you're good at, The Lounge is a safe environment that " +
                "promotes community and entrepreneurship.";

            $scope.navToLogin = function() {
                $state.go('home');
            }
        }
    };
})
