module.exports = function(logger){
  var env = require('common-env/withLogger')(logger);
  return env.getOrElseAll({
    postgresql: 'postgres://postgres:postgre@localhost/futsal-db'
  });
}
