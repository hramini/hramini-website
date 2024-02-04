import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import './info-bar-header.sass';

export class InfoBarHeader extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-info-bar-header">
        <div className="c-info-bar-header__image-holder">
          <StaticImage
            className="c-info-bar-header__image"
            src="../../../assets/images/hamidreza.png"
            alt="Hamidreza Amini"
          />
        </div>
        <p className="c-info-bar-header__name">Hamidreza Amini</p>
        <p className="c-info-bar-header__profession">JavaScript Engineer</p>
      </div>
    );
  }
}
