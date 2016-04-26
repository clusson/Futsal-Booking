"use strict";


module.exports = function(domain, server) {
  const UserController = require('./controllers/UserController')(domain.UserRepository);
  return [

    {
      method: 'GET',
      path: '/users',
      config:{

        handler: UserController.find
      }
    },
    // {
    // 	method: 'GET',
    // 	path: '/users/{user_id}',
    // 	config : {
    // 		handler: UserController.findByID
    // 	}
    // },
    // {
    // 	method: 'GET',
    // 	path: '/users',
    // 	config : {
    // 		handler: UserController.find
    // 	}
    // },
    // {
    // 	method: 'POST',
    // 	path: '/users',
    // 	config : {
    // 		handler : UserController.insert
    // 	}
    // }
    // {
    // 	method: 'GET',
    // 	path: '/users/{user_id}',
    // 	config : {
    // 		handler: UserController.update
    // 	}
    // },
    // {
    //   method: 'POST',
    //   path: '/users/{user_id}',
    //   config : {
    //     handler: UserController.updateSave
    //   }
    // },
    // {
    // 	method: 'DELETE',
    // 	path: '/users/{user_id}',
    // 	config : {
    // 		handler: UserController.delete
    // 	}
    // }
  ];
};
