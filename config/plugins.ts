// export default () => ({});

module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'V58LgYG3w4hu98b4CLKrqA=='),
      },
    },
  });