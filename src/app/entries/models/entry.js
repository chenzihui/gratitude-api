'use strict';

var Base = require('../../model'),

    Entry;

Entry = Base.Model.extend({
  tableName: 'entries',

  validations: {
    text: ['required']
  }

});

module.exports = Entry;
