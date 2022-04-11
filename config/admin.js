module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7760dbfa2925fca71a7ce3ad50645543'),
  },
});
