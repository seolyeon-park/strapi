import { Readable } from 'stream';
import { createClient } from '@supabase/supabase-js';

export default {
  init(providerOptions) {
    const supabase = createClient(
      providerOptions.supabaseUrl,
      providerOptions.supabaseKey
    );

    return {
      upload(file) {
        return new Promise<void>((resolve, reject) => {
          const buffer = Buffer.from(file.buffer);
          const stream = Readable.from(buffer);

          const fileName = `${file.hash}${file.ext}`;
          const filePath = `${file.hash}${file.ext}`;

          supabase.storage
            .from(providerOptions.bucket)
            .upload(filePath, stream, {
              contentType: file.mime,
              upsert: true,
            })
            .then(({ data, error }) => {
              if (error) {
                return reject(error);
              }

              const url = `${providerOptions.supabaseUrl}/storage/v1/object/public/${providerOptions.bucket}/${filePath}`;
              file.url = url;
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
      delete(file) {
        return new Promise<void>((resolve, reject) => {
          const filePath = `${file.hash}${file.ext}`;

          supabase.storage
            .from(providerOptions.bucket)
            .remove([filePath])
            .then(({ error }) => {
              if (error) {
                return reject(error);
              }
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
    };
  },
}; 