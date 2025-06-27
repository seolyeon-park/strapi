export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase',
      providerOptions: {
        apiUrl: env('SUPABASE_URL'),
        apiKey: env('SUPABASE_KEY'),
        bucket: env('SUPABASE_BUCKET'),
        directory: '',
        options: {
          cacheControl: '3600',
          transform: (url) => {
            const fileName = url.split('/').pop();
            if (!fileName) return url;
            
            return `${env('SUPABASE_URL')}/storage/v1/object/public/${env('SUPABASE_BUCKET')}/${fileName}`;
          }
        },
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});