module.exports = function(databaseClient){
  return {
    findAll: function(f){
      databaseClient.query('SELECT * FROM matchs', function(err, users){
        f(err, users);
      });
    }
  }
};
