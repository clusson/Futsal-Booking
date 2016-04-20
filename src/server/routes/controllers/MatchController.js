'use strict';

var matchModel = require('../models/MatchModel.js');
var matchRepository = require('../repositories/MatchRepository.js');

module.exports = function(databaseClient) {

  function remove(req, res) {
    MatchRepository.remove(req.params.id, function(err, match) {
      if (!err) {
        match.remove();
        res.status(200)
        res.end();
      }
    });
  }

  function findAll(req, res) {
    MatchRepository.find().done(function(err, matchs) {
      if (err) {
        res.send(400);
      } else {
        res.send(matchs);
      }
    });
  }

  function findByName(req, res) {
    var name = req.param('name');
    MatchRepository.findByName(name).done(function(err, matchs) {
      if (err) {
        res.send(400);
      } else {
        res.send(matchs);
      }
    });
  }

  function update(req, res) {
    MatchRepository.findOneById(req.param('id')).exec(function(err, match) {
      res.view({
        match: match
      });
    });
  }

  function updateSave(req, res) {
    var match = req.params.all();
    // save match data
    res.redirect('/match/saved');
  }
};
