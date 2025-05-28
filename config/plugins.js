module.exports = {
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
      actionOptions: {
        upload: {
          // 이미지 최적화 설정
          image: {
            resize: {
              width: 1920, // 최대 너비
              height: 1080, // 최대 높이
            },
            quality: 80, // 이미지 품질
            format: 'webp', // WebP 포맷 사용
          },
        },
        delete: {},
      },
    },
  },
  // ... 기존 설정 ...
}; 