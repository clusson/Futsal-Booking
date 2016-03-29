const $ = require('jquery');
const angular = require('angular');
const ReactDOM = require('react-dom');
const React = require('react');

module.exports = function(databaseClient){
  var UserModel = require('./UserModel')(databaseClient);
  return {
    UserModel: UserModel,
    UserRepository: require('./UserRepository')(databaseClient, UserModel)
  };

};
