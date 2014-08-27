'use strict';

var Base = require('../../model'),

    Entry;

Entry = Base.Model.extend({
  tableName: 'entries'
});

module.exports = Entry;
