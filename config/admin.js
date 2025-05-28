module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  // 빌드 최적화 설정
  build: {
    // 번들 크기 최적화
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    // 언어 파일 최적화
    locales: ['en'],
    // 소스맵 비활성화
    sourcemap: false,
    // 압축 설정
    compression: true,
  },
  // 캐시 설정
  cache: {
    enabled: true,
    max: 1000,
    ttl: 3600000, // 1시간
  },
}); 