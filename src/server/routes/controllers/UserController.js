'use strict';

module.exports = function(UserRepository) {

  return {
    remove: function remove(req, res) {
      UserRepository.remove(req.params.id, function(err, user) {
        if (!err) {
          user.remove();
          res.status(200)
          res.end();
        }
      });
    },

    find: function find(req, res) {
      UserRepository.getAll().done(function(err, users) {
        if (err) {
          res.send(400);
        } else {
          res.send(users);
        }
      });
    },

    findByName: function fndByName(req, res) {
      var name = req.param('name');
      UserRepository.findByName(name).done(function(err, users) {
        if (err) {
          res.send(400);
        } else {
          res.send(users);
        }
      });
    },

    update: function update(req, res) {
      UserRepository.findOneById(req.param('id')).exec(function(err, user) {
        res.view({
          user: user
        });
      });
    },

    updateSave: function updateSave(req, res) {
      var user = req.params.all();
      // save user data
      res.redirect('/user/saved');
    }
  };
};
