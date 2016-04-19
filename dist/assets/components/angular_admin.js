var app = angular.module('Futsal', [])

.controller('UserController',, function($scope, $http) {
  $http.get(src/routes/controllers/UserController.js).success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});
