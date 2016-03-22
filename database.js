module.exports = function(connectionString, f) {
  const pg = require('pg');
  const client = new pg.Client(connectionString);
  client.connect(function(err) {
    f(err, client);
  });

};
