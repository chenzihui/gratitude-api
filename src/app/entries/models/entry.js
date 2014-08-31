'use strict';

var Base = require('../../model'),

    Entry;

Entry = Base.Model.extend({
  tableName: 'entries',

  validations: {
    text: ['required']
  }

}, {
  findAll: function(month, year) {
    if (!month || !year) {
      var month = new Date().getMonth() + 1,
          year  = new Date().getFullYear();
    }

    return this.collection().query(function(qb) {
      qb.whereRaw(
        'EXTRACT(MONTH FROM created_at) = ? ' +
        'AND EXTRACT(YEAR FROM created_at) = ?',
        [month, year]
      );
    }).fetch();
  }
});

module.exports = Entry;
