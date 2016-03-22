module.exports = function(databaseClient){
  return {
    getRecords: function(req, res) {
      var query = client.query("SELECT * FROM users");
      query.on("row", function (row, result) {
        result.addRow(row);
      });

      query.on("end", function (result) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(result.rows, null, "    ") + "\n");
        res.end();
      });
    },

    createTable : function(req, res){
      var query = client.query( "CREATE TABLE users"+
      "("+
      "firstname character varying(50),"+
      "lastname character varying(20),"+
      "password character varying(20),"+
      "email character varying(30),"+
      "admin boolean,"+
      "id serial NOT NULL"+
      ")");
      query.on("end", function (result) {
        res.write('Table Schema Created');
        res.end();
      });
    },

    dropTable : function(req, res){
      var query = client.query( "DROP TABLE users");
      query.on("end", function (result) {
        res.write('Table Schema Deleted');
        res.end();
      });
    },

    addRecord : function(req, res){
      var query = client.query("INSERT INTO users (firstname,lastName,email,admin) "+
      "values ('"+req.query.firstname+"','"+req.query.lastname+"','"+
      req.query.password+"','"+
      req.query.email+"','"+req.query.admin+"')");
      query.on("end", function (result) {
        res.write('Success');
        res.end();
      });
    },

    delRecord : function(req, res){
      var query = client.query( "DELETE FROM users WHERE id ="+req.query.id);
      query.on("end", function (result) {
        res.write('Success');
        res.end();
      });
    }

  };
}
