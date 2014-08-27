'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', function(table) {
    table.increments('id').primary();
    table.text('text').notNullable();

    table.timestamp('created_at').defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
