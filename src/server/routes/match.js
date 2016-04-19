"use strict";

module.exports = function(domain, server) {
  const matchController = require('./controllers/MatchController')(domain.matchRepository);
	return [
		{
			method: 'GET',
			path: '/matchs/{match_id}',
			config : {
				handler: MatchController.findByID
			}
		},
		{
			method: 'GET',
			path: '/matchs',
			config : {
				handler: MatchController.find
			}
		},
		{
			method: 'POST',
			path: '/matchs',
			config : {
				handler : MatchController.insert
			}
		},
		{
			method: 'PUT',
			path: '/matchs/{match_id}',
			config : {
				handler: MatchController.update
			}
		},
		{
			method: 'DELETE',
			path: '/matchs/{match_id}',
			config : {
				handler: MatchController.delete
			}
		}
	];
}();
