module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'bhtvq6pocdo3qeoqgbwv-mysql.services.clever-cloud.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bhtvq6pocdo3qeoqgbwv'),
      user: env('DATABASE_USERNAME', 'uwplrci3prwdvllg'),
      password: env('DATABASE_PASSWORD', 'kR0xUDR8GhGrz2UhPOZz'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      max: 3
    }
  },
});
