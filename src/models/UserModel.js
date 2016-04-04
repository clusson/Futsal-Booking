const ReactDOM = require('react-dom');
const React = require('react');

module.exports = function(databaseClient) {

  function UserModel(){
  	this.schema = {
  		firstname: Joi.string().max(255),
  		lastname: Joi.string().max(255),
  		email: Joi.string().max(255),
  		password: Joi.string().max(255),
      admin: Joi.boolean()
  	};
  };

  function UserModel(row) {
    this.firstname = row.firstname;
    this.lastname = row.lastname;
  }

  UserModel.prototype.getFullname = function() {
    return `${this.firstname} ${this.lastname}`;
  };

  return UserModel;
};
