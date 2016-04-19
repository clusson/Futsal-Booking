var Futsal = angular.module('Futsal', [])

.controller('UserController', function($scope, $http) {
  $http.get('/user.js')
          .success(function(data) {
              $scope.user = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });

});
