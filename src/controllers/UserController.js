'use strict';

var userModel = require('../models/UserModel');
var userRepository = require('../repositories/UserRepository');
module.exports = function(databaseClient) {

  function UserController() {
    // var users [] = userRepository.getAll();

  };

  return UserController;
};
