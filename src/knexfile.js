// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      password: 'r00t',
      port: 3396
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
