'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
server.connection({
  port: 3000
});
const logger = require('winston');
const config = require('./config')(logger);

// register plugins
server.register(require('inert'), (err) => {

});

require('./database')(config.postgresql, function(err, client){
  if(err){
    logger.error(err);
    throw err;
  }

  const domain = require('./src/domain')(client);



  // setup routes
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, './dist')
      }
    }
  });


  const routes = require('./src/routes')(domain, server);
  // const Repo = require('./src/repositories/UserRepository');
  // Repo.createTable(function(err, users){
  //
  // });
  //

  // listen
  server.start((err) => {

    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });

});
