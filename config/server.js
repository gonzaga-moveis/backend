module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ['BLjkzQaw/l0dMiEYxC6Omw==','6JAw0AM21O9jlMEtOBTvTQ==','ourZnV5bzZmhlVg6eiKXMw==','yyaiHROjkMx3CZGZdaK7kg==']),
  },
});
