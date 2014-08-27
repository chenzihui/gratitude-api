'use strict';

var Knex   = require('knex'),
    config = require('../../config'),

    knex = Knex(config.database);

exports.cleanUp = function() {
  return knex.migrate.rollback(config.database.migrations)
  .then(function() {
    return knex.migrate.latest(config.database.migrations);
  });
};
