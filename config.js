module.exports = function(logger){
  var env = require('common-env/withLogger')(logger);
  return env.getOrElseAll({
    postgresql: 'postgres://uahqreyytaan3nubuhaz:LWKHfYPoWe8RA4a7SSmm@bhl40gxivqrwahs-postgresql.services.clever-cloud.com:5432/bhl40gxivqrwahs'
  });
}
