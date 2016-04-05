module.exports = function(databaseClient) {
  const MatchModel = require('./models/MatchModel')(databaseClient);

  return {
    MatchModel: MatchModel,
    UserModel: require('./models/UserModel')(databaseClient),
    MatchRepository: require('./repositories/MatchRepository')(databaseClient, MatchModel),
    UserRepository: require('./repositories/UserRepository')(databaseClient, MatchModel),
  };
};
