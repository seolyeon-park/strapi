export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase',
      providerOptions: {
        apiUrl: 'https://nnkoadjsfgkmivkuyfbv.supabase.co',
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ua29hZGpzZmdrbWl2a3V5ZmJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM5OTU3NSwiZXhwIjoyMDYzOTc1NTc1fQ.KhGXT8L7U_N7Q_NlPXj7IT2AXHxFVpAgmq3NSURKU84',
        bucket: 's-strapi',
        directory: '',
        options: {
          cacheControl: '3600',
          transform: (url) => {
            const fileName = url.split('/').pop();
            if (!fileName) return url;
            
            return `https://nnkoadjsfgkmivkuyfbv.supabase.co/storage/v1/object/public/s-strapi/${fileName}`;
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