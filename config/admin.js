module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '610fd2836f5d3793317dd981a1ea5449'),
  },
});
