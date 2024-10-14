export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['UlcEc3Pn10tQXjlgHsCH9g==','/JZTUHJGgOHOv+7P7s9d4A==','eDHTZkjtdddn0X2TAtb6ew==','S/49wb7+lQMLPalO5DU9xw==']),
  },
});
