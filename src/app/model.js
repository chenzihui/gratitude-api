'use strict';

var Knex      = require('knex'),
    Bookshelf = require('bookshelf'),

    config    = require('../../config'),

    knex, Base;

knex = Knex(config.database);

Base = Bookshelf(knex);

Base.Model = Base.Model.extend({}, {

  add: function(args) {
    return this.forge(args).save();
  },

  findOne: function(args) {
    return this.forge(args).fetch();
  }
});

module.exports = Base;
