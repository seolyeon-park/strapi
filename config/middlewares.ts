export default ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://nnkoadjsfgkmivkuyfbv.supabase.co'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://nnkoadjsfgkmivkuyfbv.supabase.co'],
          'default-src': ["'self'"],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          'style-src': ["'self'", "'unsafe-inline'"],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://sanchoiworks.github.io', 'http://localhost:3000', 'http://127.0.0.1:5500'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'Cache-Control',
        'X-Requested-With',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
      maxAge: 86400, // 24시간 캐시
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '5mb',
      formLimit: '5mb',
      textLimit: '5mb',
      formidable: {
        maxFileSize: 5 * 1024 * 1024, // 5MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];