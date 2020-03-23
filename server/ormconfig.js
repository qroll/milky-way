require('dotenv');

const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
};

module.exports = [
  {
    ...config,
    name: 'default',
    migrationsTableName: 'migration',
    entities: ['db/entity/**/*.ts'],
    migrations: ['db/migration/**/*.ts'],
    subscribers: ['db/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'db/entity',
      migrationsDir: 'db/migration',
      subscribersDir: 'db/subscriber',
    },
  },
  {
    ...config,
    name: 'seeder',
    migrationsTableName: 'seeder',
    entities: ['db/entity/**/*.ts'],
    migrations: ['db/seeder/**/*.ts'],
    subscribers: ['db/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'db/entity',
      migrationsDir: 'db/migration',
      subscribersDir: 'db/subscriber',
    },
  },
];
