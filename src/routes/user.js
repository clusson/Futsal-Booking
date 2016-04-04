"use strict";

var userController = require('src/controllers/userController');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/users/{user_id}',
			config : {
				handler: userController.findByID
			}
		},
		{
			method: 'GET',
			path: '/users',
			config : {
				handler: userController.find
			}
		},
		{
			method: 'POST',
			path: '/users',
			config : {
				handler : userController.insert
			}
		},
		{
			method: 'PUT',
			path: '/users/{user_id}',
			config : {
				handler: userController.update
			}
		},
		{
			method: 'DELETE',
			path: '/users/{user_id}',
			config : {
				handler: userController.delete
			}
		}
	];
}();
