module.exports = function(databaseClient){
  return {
    UserModel: require('./UserModel')(databaseClient),
    UserRepository: require('./UserRepository')(databaseClient)
  };
};
