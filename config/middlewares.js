module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:8000', 'https://strapi-production-af72.up.railway.app'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'User-Agent',
        'X-Requested-With',
        'X-Request-Id',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      maxAge: 604800000, // 1주일 캐시 (7 * 24 * 60 * 60 * 1000)
    },
  },
  {
    name: 'strapi::compression',
    config: {
      enabled: true,
      level: 6, // 압축 레벨 (1-9, 9가 가장 높은 압축률)
    },
  },
]; 