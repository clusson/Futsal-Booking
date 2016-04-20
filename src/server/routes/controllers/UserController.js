'use strict';

var userModel = require('../models/UserModel');
var userRepository = require('../repositories/UserRepository');

module.exports = function(databaseClient) {

  findAll: function (req, res) {
    User.find().done(function (err, users) {
      if (err) {
        res.send(400);
      } else {
        res.send(users);
      }
    });
  },

  findById: function(req, res) {
    var name = req.param('id');
    User.findById(id).done(function (err, users) {
      if (err) {
        res.send(400);
      } else {
        res.send(users);
      }
    });
  },

  update: function(req, res) {
    User.findOneById(req.param('id')).exec(function(err, user){
      res.view({ user: user });
    });
  },

  updateSave: function(req, res) {
    var user = req.params.all();
    // save user data
    res.redirect('/user/saved');
  }

  function remove(req, res){
    userHelper.remove(req.params.id, function(err, user){
      if(!err){
        user.remove();
        res.status(200)
        res.end();
      }
    })
  }
};
