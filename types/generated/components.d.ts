import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectSec extends Struct.ComponentSchema {
  collectionName: 'components_project_secs';
  info: {
    description: '';
    displayName: 'section';
    icon: 'alien';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.sec': ProjectSec;
    }
  }
}
