module.exports = function(angular) {
  angular
  .module('Futsal')
  .controller('UserController', function($scope, $http) {
    $scope.users = [];

    $http.get('/users')
    .success(function(users) {
      $scope.users = users;
      console.log(users);
    })
    .error(function(data) {
      $scope.users = [];
      console.log('Error: ' + data);
    });
  });

};
