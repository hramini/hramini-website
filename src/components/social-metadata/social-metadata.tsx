import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import BaseComponent from '../../base/base-component';
// import { Path } from '../../global/path-enum';
import { SocialMetadataType } from './social-metadata-enum';
import { ISocialMetadataProperties } from './social-metadata-interface';

export default class SocialMetadata extends BaseComponent<ISocialMetadataProperties> {
  public render(): ReactNode {
    const { title, description, imageResourceFileName, type } = this.props;
    const imageSourceContent: string = `${this.getResourcesPath()}/${imageResourceFileName}`;

    return (
      <Helmet
        meta={[
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:type',
            content: SocialMetadataType.OBJECT,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:image',
            content: imageSourceContent,
          },
          {
            name: 'twitter:card',
            content: type,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:image:src',
            content: imageSourceContent,
          },
          {
            name: 'twitter:description',
            content: description,
          },
        ]}
      />
    );
  }

  protected getResourcesPath(): string {
    return `${process.env.SITE_URL}`;
  }
}
