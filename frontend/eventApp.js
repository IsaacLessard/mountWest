var app = angular.module('eventApp', ['ngRoute']);

app.controller('eventsCont', function($scope, $http) {
  $scope.formData = {}

  $http.get('/events')
    .success(function(data) {
      $scope.events = data;
      console.log(data);
    });
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createEvent = function () {
    $http.post('/events', $scope.formData)
    .success(function(data) {
      $scope.formData = {};
      $scope.events = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };
});

app.controller('eventCont', function ($scope, $http) {

})
//
// eventApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/events', {
//         templateUrl: '../frontend/events.html',
//         controller: 'eventsCont'
//       }).
//       when('/events/:id', {
//         templateUrl: '../frontend/event.html',
//         controller: 'eventCont'
//       })
//       .otherwise({
//         redirectTo: '../frontend/events.html'
//       })
//   }
//   ])
