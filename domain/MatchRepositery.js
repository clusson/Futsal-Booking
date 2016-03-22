module.exports = function(databaseClient){
  return {
    findAll: function(f){
      databaseClient.query('SELECT * FROM users', function(err, users){
        f(err, users);
      });
    }
  }
};
