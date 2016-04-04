module.exports = function(databaseClient) {

  function MatchModel(){
    this.schema = {
      name: Joi.string().max(255),
      date: Joi.date()
    };
  };

  function MatchModel(row) {
    this.name = row.name;
    this.date = row.date;
  }
  UserModel.prototype.getMatchName = function() {
    return `${this.name}`;
  };

  return MatchModel;
};
