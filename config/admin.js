module.exports = ({ env }) => ({
  url: env('ADMIN_URL', '/admin'),
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cbe13ca4-7f3e-45e8-b166-06cb6cf1b9be'),
  },
});
