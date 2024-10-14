// export default () => ({});

// module.exports = ({ env }) => ({
//     'users-permissions': {
//       config: {
//         jwtSecret: env('JWT_SECRET', 'V58LgYG3w4hu98b4CLKrqA=='),
//       },
//       apiToken: {
//         salt: env('API_TOKEN_SALT', '9vEHX59B30MyO/r6V6ytUg=='),
//       },
//     },
//   });

//   module.exports = ({ env }) => ({
//     auth: {
//       apiToken: {
//         salt: env('API_TOKEN_SALT', 'yourGeneratedSalt'),
//       },
//     },
//   });

module.exports = ({ env }) => ({
    auth: {
      apiToken: {
        salt: '9vEHX59B30MyO/r6V6ytUg==', 
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: 'V58LgYG3w4hu98b4CLKrqA==', 
      },
    },
  });