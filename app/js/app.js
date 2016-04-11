var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'app/views/home.html',
      controller:  'HomeController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);