export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['uYt#3rD@9zXv!6bG&QmL7aTn%8sWj4P', 'nH5$1zQv&kT@7mR#3xX8*eFj6%aL0yW']),
  },
});
