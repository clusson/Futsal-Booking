module.exports = function(databaseClient) {
  const MatchModel = require('./models/MatchModel')(databaseClient);
  const UserModel = require('./models/UserModel')(databaseClient);

  return {
    MatchModel: MatchModel,
    UserModel: UserModel,
    MatchRepository: require('./repositories/MatchRepository')(databaseClient, MatchModel),
    UserRepository: require('./repositories/UserRepository')(databaseClient, MatchModel),
  };
};
