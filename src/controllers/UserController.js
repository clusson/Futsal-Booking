'use strict';

var userModel = require('../models/UserModel');
var userRepository = require('../models/UserRepository');
module.exports = function(databaseClient) {

  class UserController() {
    var users [] = userRepository.getAll();

  };


  return UserController;
};
