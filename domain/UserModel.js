// module.exports = function(databaseClient){
//   return {
//     createUserTable: function(f){
//       databaseClient.query('CREATE TABLE IF NOT EXISTS users(id int(11) NOT NULL AUTO_INCREMENT,firstname varchar(50),lastname varchar(50),email varchar(50), admin boolean, PRIMARY KEY (id))', function(err, users){
//         f(err, users);
//       });
//     }
//   }
// };


var Schema = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true},
    firstname: {type: 'string', maxlength: 150, nullable: false}
    lastname: {type: 'string', maxlength: 150, nullable: false}
    admin: {type: 'boolean', nullable: false}
  };

  module.exports = Schema;

//
// INSERT INTO employees (id, firstname, lastname, email, admin) VALUES
// (1, 'Clément', 'Lusson', 'clementlusson@gmail.com', true),
// (2, 'Nicolas', 'Guillon', 'nico@gmail.com', true),
// (3, 'Fabien', 'Hy', 'fabienhy@gmail.com', false),
// (4,  'Erwan', 'Dupas', 'erwan.dupas@gmail.com', false);
