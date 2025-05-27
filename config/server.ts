module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['yourKeyA', 'yourKeyB']),
  },
  webhooks: {
    populateRelations: false,
  },
  cache: {
    enabled: true,
    type: 'memory',
    max: 100,
    ttl: 3600000, // 1시간
  },
});