const Joi = require('Joi');

module.exports = function(databaseClient) {

  function MatchModel(){
    this.schema = {
      players: Joi.string().max(255),
      date: Joi.date()
    };
  };

  function MatchModel(row) {
    this.players = row.players;
    this.date = row.date;
  }

  MatchModel.prototype.getPlayers = function() {
    return `${this.players}`;
  };

  return MatchModel;
};
