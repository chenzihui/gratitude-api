'use strict';

var Base = require('../../model'),

    Entry;

Entry = Base.Model.extend({
  tableName: 'entries',

  validations: {
    text: ['required']
  }

}, {
  findAll: function() {
    return this.collection().fetch();
  }
});

module.exports = Entry;
