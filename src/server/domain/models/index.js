const Hapi = require('hapi');

module.exports = function(databaseClient){
  var UserModel = require('./UserModel')(databaseClient);
  return {
    UserModel: UserModel,
    UserRepository: require('./UserRepository')(databaseClient, UserModel)
  };

  var MatchModel = require('./MatchModel')(databaseClient);
  return {
    MatchModel : MatchModel,
    MatchRepository: require ('./MatchRepository')(databaseClient, MatchModel)
  };


};
