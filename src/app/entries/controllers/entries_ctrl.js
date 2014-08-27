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
    });
  };

  return {
    create: create
  };

}());

module.exports = EntriesCtrl;
