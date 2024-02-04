import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { InfoBarBody } from './body/info-bar-body';
import { InfoBarFooter } from './footer/info-bar-footer';
import { InfoBarHeader } from './header/info-bar-header';
import './info-bar.sass';

export class InfoBar extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-info-bar">
        <InfoBarHeader />
        <InfoBarBody />
        <InfoBarFooter />
      </div>
    );
  }
}
