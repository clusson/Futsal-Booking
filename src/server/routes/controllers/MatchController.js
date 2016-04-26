'use strict';

module.exports = function(MatchRepository) {

  return {
    remove: function remove(req, res) {
      MatchRepository.remove(req.params.id, function(err, match) {
        if (!err) {
          match.remove();
          res.status(200)
          res.end();
        }
      });
    },

    find: function find(req, res) {
      MatchRepository.find().done(function(err, matchs) {
        if (err) {
          res.send(400);
        } else {
          res.send(matchs);
        }
      });
    },

    findByName: function fndByName(req, res) {
      var name = req.param('name');
      MatchRepository.findByName(name).done(function(err, matchs) {
        if (err) {
          res.send(400);
        } else {
          res.send(matchs);
        }
      });
    },

    update: function update(req, res) {
      MatchRepository.findOneById(req.param('id')).exec(function(err, match) {
        res.view({
          match: match
        });
      });
    },

    updateSave: function updateSave(req, res) {
      var match = req.params.all();
      // save match data
      res.redirect('/match/saved');
    }
  };
};
