"use strict";


module.exports = function(domain, server) {
  const userController = require('./controllers/UserController')(domain.UserRepository);


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
