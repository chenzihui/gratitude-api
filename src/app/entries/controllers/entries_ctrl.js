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

  return {
    create: create
  };

}());

module.exports = EntriesCtrl;
