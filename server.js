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

  // domain.UserRepository.createTable(function(err, users){
  //   console.log("Table users créé");
  // });
  // domain.MatchRepository.createTable(function(err, matchs){
  //   console.log("Table matchs créé");
  // });

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


  // listen
  server.start((err) => {

    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });

});
