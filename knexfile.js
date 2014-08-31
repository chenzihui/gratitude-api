// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: {
      database: 'gratitude_journal'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'gratitude_test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
