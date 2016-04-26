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


    $scope.updateUser = function(){
      $('.btn-save').button('loading');
      $scope.saveUser();
    }

    $scope.editUser = function(user){
      $scope.tempUser = {
        id: user.id,
        firstname : user.firstname,
        lastname : user.lastname,
        email : user.email
      };
      $scope.editMode = true;
      $scope.index = $scope.post.users.indexOf(user);
    }
  });
};
