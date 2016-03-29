module.exports = function(databaseClient) {

  function MatchModel(row) {
    this.name = row.name;
  }

  return MatchModel;
};
