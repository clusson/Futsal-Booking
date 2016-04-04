"use strict";

var userController = require('src/controllers/user');
var userValidate = require('validate/user');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/users/{user_id}',
			config : {
				handler: userController.findByID,
				validate: userValidate.findByID
			}
		},
		{
			method: 'GET',
			path: '/users',
			config : {
				handler: userController.find,
				validate : userValidate.find
			}
		},
		{
			method: 'POST',
			path: '/users',
			config : {
				handler : userController.insert,
				validate : userValidate.insert
			}
		},
		{
			method: 'PUT',
			path: '/users/{user_id}',
			config : {
				handler: userController.update,
				validate : userValidate.update
			}
		},
		{
			method: 'DELETE',
			path: '/users/{user_id}',
			config : {
				handler: userController.delete,
				validate : userValidate.delete
			}
		}
	];
}();
