import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { Button } from '../button/button';
import './banner.sass';

export class Banner extends BaseComponent {
  protected declareTranslateCollection(): string | undefined {
    return 'home.banner';
  }

  public render(): ReactElement {
    return (
      <section className="banner">
        <StaticImage
          className="banner_image"
          src="../../assets/images/transparent2.png"
          alt="Hamidreza Amini"
          formats={['png']}
        />
        <div className="banner_content">
          <h1 className="banner_content__title">{this.translate('title')}</h1>
          <p className="banner_content__quote">
            {'<'}
            <span>code</span>
            {'> '}
            <i>{this.translate('subtitle')}</i>
            {' </'}
            <span>code</span>
            {'>'}
          </p>
          <Button>{this.translate('readMoreButtonText')}</Button>
        </div>
      </section>
    );
  }
}
