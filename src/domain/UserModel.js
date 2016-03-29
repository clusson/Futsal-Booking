const ReactDOM = require('react-dom');
const React = require('react');

const User = require('./components/UserComponent.jsx');
const UsersForm = require('./components/UsersFormComponent.jsx');

module.exports = function(databaseClient) {

function render(user){
    ReactDOM.render(<User users={users} />, document.getElementById('usersContainer'));
    ReactDOM.render(<UsersForm onSubmit={onUserFormSubmit} />, document.getElementById('addUser'));
}

render([]);

function refreshUsers(){
  $.get('/api/users').then(render);
}

refreshUsers();

function onUserFormSubmit(user){
  $.post('/api/users', user).then(function(){
    refreshUsers();
  }, function(err){
    alert(err);
  });
}

  function UserModel(row) {
    this.firstname = row.firstname;
    this.lastname = row.lastname;
  }

  UserModel.prototype.getFullname = function() {
    return `${this.firstname} ${this.lastname}`;
  };

  return UserModel;
};
