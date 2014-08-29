'use strict';

var _     = require('underscore'),
    Entry = require('../../../src/app/entries/models/entry');

exports.create = function(args) {
  var defaults = { text: 'Test Entry' },
      args     = args || {},

      params   = _.defaults(defaults, args);

  return Entry.add(params);
};
