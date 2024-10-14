export default ({ env }) => ({
  auth: {
    secret:'8S1TZDEdpinmjQ2Wgsb6Mg==',
  },
  apiToken: {
    salt: 'K3g6gicJaCdf6uQLj4of6A==',
  },
  transfer: {
    token: {
      salt: 'w/JWlvL6WuXl5wbiY7M+Sw==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
