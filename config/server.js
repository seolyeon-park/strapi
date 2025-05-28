module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // 성능 최적화 설정 추가
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    // 번들 크기 최적화
    watchIgnoreFiles: [
      '**/config/sync/**',
    ],
    // 캐시 설정
    cache: {
      enabled: true,
      max: 1000,
      ttl: 3600000, // 1시간
    },
  },
  // API 응답 최적화
  api: {
    rest: {
      defaultLimit: 25,
      maxLimit: 100,
      withCount: false,
    },
  },
  // 업로드 최적화
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // 압축 설정
  compression: {
    enabled: true,
    level: 6,
  },
  // 캐시 설정
  cache: {
    enabled: true,
    type: 'memory',
    max: 1000,
    ttl: 3600000, // 1시간
  },
}); 