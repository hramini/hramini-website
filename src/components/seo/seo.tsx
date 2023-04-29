import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import BaseComponent from '../../base/base-component';
import { ISEOProperties } from './seo-interface';

export default class SEO extends BaseComponent<ISEOProperties> {
  public render(): ReactNode {
    const {
      pageTitle,
      keywords = [],
      language = 'en-us',
      description,
    } = this.props;

    return (
      <Helmet
        title={pageTitle}
        htmlAttributes={{ lang: language }}
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'keywords',
            content: keywords.join(','),
          },
        ]}
      />
    );
  }
}
