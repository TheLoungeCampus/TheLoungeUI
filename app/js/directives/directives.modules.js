require('./landingpage.directive');
require('./login.directive');
require('./homepage.directive');
require('./searchbar.directive');
require('./rzslider.directive');

angular.module('directivesModule', [
    'landingpage.directive',
    'login.directive',
    'home.directive',
    'searchbar.directive',
    'rzModule'
])
