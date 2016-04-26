module.exports = function(databaseClient, UserModel) {
  return {
    /**
    * Yield every users
    * @param  {function} f(err, users), users=Array[UserModel]
    */
    getAll: function(f) {
      var query = databaseClient.query(`SELECT * FROM users`, function(err, result) {
        if (err) {
          return f(err);
        }
        f(null, result.rows.map(function(row) {
          return new UserModel(row);
        }));
      });
    },

    /**
    * Create table
    * @param  {function} f(err)
    */
    createTable: function(f) {
      var query = databaseClient.query(`
        CREATE TABLE IF NOT EXISTS users
        (
          id serial NOT NULL,
          firstname character varying(50),
          lastname character varying(20),
          password character varying(20),
          email character varying(30),
          admin boolean,
          PRIMARY KEY ("id"),
          UNIQUE ("email")
        )
        `, function(err, result) {
          f(err);
        });
      },

      dropTable: function(f) {
        var query = databaseClient.query(`DROP TABLE IF EXISTS users`, f);
      },

      /**
      *
      * @param  {UserModel} user [description]
      * @return {[type]}      [description]
      * Usage: UserRepository.insert(new UserModel({username: }));
      */
      insert: function(userModel) {
        var query = databaseClient.query(`
          INSERT INTO users
          (
            firstname,
            lastname,
            email,
            password,
            admin
          )
          VALUES
          (
            "Clement",
            "Lusson",
            "pa$$w0rd",
            "clementlusson@gmail.com",
            "true"
          )
          `);
        },

        delete: function(userModel) {
          var query = databaseClient.query(`
            DELETE FROM users WHERE id ="+ req.query.id")
            `, function(err, result) {
              f(err);
            });
          }

        };
      }
