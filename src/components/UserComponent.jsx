const ReactDOM = require('react-dom');
const React = require('react');

/*
 * Components
 */

var UserItem = React.createClass({
  propTypes: {
    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {className: 'UserItem'},
        React.createElement('h2', {className: 'UserItem-firstname'}, this.props.firstname),
        React.createElement('h2', {className: 'UserItem-lastname'}, this.props.lastname),
        React.createElement('a', {className: 'UserItem-email', href: 'mailto:'+this.props.email}, this.props.email)
      )
    );
  },
});

var UserForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    var oldUser = this.props.value;
    var onChange = this.props.onChange;

    return (
      React.createElement('form', {className: 'UserForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nom (required)',
          value: this.props.value.lastname,
          onChange: function(e) {
            onChange(Object.assign({}, oldUser, {lastname: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Prénom (required)',
          value: this.props.value.firstname,
          onChange: function(e) {
            onChange(Object.assign({}, oldUser, {firstname: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.value.email,
          onChange: function(e) {
            onChange(Object.assign({}, oldUser, {email: e.target.value}));
          },
        }),
        React.createElement('password', {
          placeholder: 'Mot de passe',
          value: this.props.value.password,
          onChange: function(e) {
            onChange(Object.assign({}, oldUser, {password: e.target.value}));
          },
        }),
        React.createElement('button', {type: 'submit'}, "Ajouter utilisateur")
      )
    );
  },
});

var UserView = React.createClass({
  propTypes: {
    users: React.PropTypes.array.isRequired,
    newUser: React.PropTypes.object.isRequired,
  },

  render: function() {
    var userItemElements = this.props.users
      .filter(function(user) { return user.email; })
      .map(function(user) { return React.createElement(UserItem, user); });

    return (
      React.createElement('div', {className: 'UserView'},
        React.createElement('h1', {className: 'UserView-title'}, "Utilisateurs"),
        React.createElement('ul', {className: 'UserView-list'}, userItemElements),
        React.createElement(UserForm, {
          value: this.props.newUser,
          onChange: function(user) { console.log(user); },
        })
      )
    );
  },
});


/*
 * Model
 */

var users = [
  {key: 1, firstname: "James K Nelson", lastname: "James K Nelson", email: "james@jamesknelson.com", password: "password"}]


var newUser = {firstname: "", lastname: "", email: "", password: ""};

/*
 * Entry point
 */
ReactDOM.render(
  React.createElement(UserView, {
    users: users,
    newUser: newUser,
  }),
  document.getElementById('addUser')
);
