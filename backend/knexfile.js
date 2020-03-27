module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/dev.database.sqlite3",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/test.database.sqlite3",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/staging.database.sqlite3",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/staging.database.sqlite3",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },
};
