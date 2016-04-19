module.exports = function(domain, server){
  server.route(require('./match')(domain, server));
  server.route(require('./user')(domain, server));
};
