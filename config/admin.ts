export default ({ env }) => ({
  auth: {
    secret:'V58LgYG3w4hu98b4CLKrqA==',
  },
  apiToken: {
    salt: '9vEHX59B30MyO/r6V6ytUg==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
