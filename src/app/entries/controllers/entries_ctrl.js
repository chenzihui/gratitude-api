'use strict';

var Entry = require('../models/entry'),

    EntriesCtrl;

EntriesCtrl = (function() {

  var create = function(req, res) {
    var args = {
      text: req.body.text
    };

    Entry.add(args)
    .then(function(entry) {
      return res.status(201).json({
        entry: entry.toJSON()
      });
    })
    .catch(function(err) {
      return res.status(422).json({
        errors: { message: 'Entry cannot be left blank' }
      });
    });
  };

  var update = function(req, res) {

    Entry.findOne({ id: req.params.id })
    .then(function(entry) {
      entry.set('text', req.body.text);
      return entry.save()
    })
    .then(function(entry) {
      return res.status(200).json({
        entry: { id: entry.id }
      });
    });
  };

  return {
    create: create,
    update: update
  };

}());

module.exports = EntriesCtrl;
