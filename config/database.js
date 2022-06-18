module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQL_ADDON_HOST', 'bhtvq6pocdo3qeoqgbwv-mysql.services.clever-cloud.com'),
      port: env.int('MYSQL_ADDON_PORT', 3306),
      database: env('MYSQL_ADDON_DB', 'bhtvq6pocdo3qeoqgbwv'),
      user: env('MYSQL_ADDON_USER', 'uwplrci3prwdvllg'),
      password: env('MYSQL_ADDON_PASSWORD', 'kR0xUDR8GhGrz2UhPOZz'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      max: 3
    }
  },
});
