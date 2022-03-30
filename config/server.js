module.exports = ({ env }) => ({
  host: env('HOST', 'https://app-bb9df65c-c904-4e2e-80e1-ee95fb961bac.cleverapps.io/'),
  port: env.int('PORT', 8080),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
