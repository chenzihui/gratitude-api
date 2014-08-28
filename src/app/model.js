'use strict';

var Knex      = require('knex'),
    Bookshelf = require('bookshelf'),
    Checkit   = require('checkit'),

    config    = require('../../config'),

    knex, Base;

knex = Knex(config.database);

Base = Bookshelf(knex);

Base.Model = Base.Model.extend({

  initialize: function() {
    this.on('saving', this.validate);
  },

  validate: function() {
    return Checkit(this.validations).run(this.attributes);
  }
}, {

  add: function(args) {
    return this.forge(args).save();
  },

  findOne: function(args) {
    return this.forge(args).fetch();
  }
});

module.exports = Base;
