module.exports = function(databaseClient, MatchModel) {
  return {

    /**
    * Yield every users
    * @param  {function} f(err, users), users=Array[MatchModel]
    */
    getAll: function(f) {
      var query = databaseClient.query(`SELECT * FROM users`, function(err, result) {
        if (err) {
          return f(err);
        }

        f(null, result.rows.map(function(row) {
          return new MatchModel(row);
        }));
      });
    },

    /**
    * Create table
    * @param  {function} f(err)
    */
    createTable: function(f) {
      var query = databaseClient.query(`
        CREATE TABLE matchs
        (
          id serial NOT NULL,
          date datetime,
          players int,
        )
        `,  function(err, result) {
          f(err);
        });
      },

      dropTable: function(f) {
        var query = databaseClient.query(`DROP TABLE matchs`, f);
      },

      /**
      *
      * @param  {MatchModel} user [description]
      * @return {[type]}      [description]
      * Usage: UserRepository.insert(new MatchModel({username: }));
      */
      insert: function(matchModel) {
        var query = databaseClient.query(`
          INSERT INTO matchs
          (
            date,
            players
          )
          VALUES
          (
            req.query.date +
            req.query.players
          )
          `, function(err, result) {
            f(err);
          });
        },

        delete: function(matchModel) {
          var query = databaseClient.query(`
            DELETE FROM matchs WHERE id ="+ req.query.id")
            `, function(err, result) {
              f(err);
            });
          }

        };
      }
