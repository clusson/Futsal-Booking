"use strict";


module.exports = function(domain, server) {
  const matchController = require('./controllers/MatchController')(domain.matchRepository);


	return [
		{
			method: 'GET',
			path: '/matchs/{match_id}',
			config : {
				handler: matchController.findByID
			}
		},
		{
			method: 'GET',
			path: '/matchs',
			config : {
				handler: matchController.find
			}
		},
		{
			method: 'POST',
			path: '/matchs',
			config : {
				handler : matchController.insert
			}
		},
		{
			method: 'PUT',
			path: '/matchs/{match_id}',
			config : {
				handler: matchController.update
			}
		},
		{
			method: 'DELETE',
			path: '/matchs/{match_id}',
			config : {
				handler: matchController.delete
			}
		}
	];
}();
