import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import './info-bar-body.sass';
import { Coding } from './sections/coding/coding';
import { Knowledge } from './sections/knowledge/knowledge';
import { Languages } from './sections/languages/languages';
import { Living } from './sections/living/living';

export class InfoBarBody extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-info-bar-body">
        <div className="c-info-bar-body__section">
          <Living />
        </div>
        <hr />
        <div className="c-info-bar-body__section">
          <h5 className="c-info-bar-body__section-title">Languages</h5>
          <Languages />
        </div>
        <hr />
        <div className="c-info-bar-body__section">
          <h5 className="c-info-bar-body__section-title">Coding</h5>
          <Coding />
        </div>
        <hr />
        <div className="c-info-bar-body__section">
          <h5 className="c-info-bar-body__section-title">Knowledge</h5>
          <Knowledge />
        </div>
        <hr />
        <div className="c-info-bar-body__section">
          <p className="c-info-bar-body__cv">
            <a
              className="c-info-bar-body__cv-link"
              href="https://hramini-back.ir/wp-content/uploads/2023/06/Hamidreza-Amini-CV-New.pdf"
              download
              target="_blank"
            >
              Download my CV <i className="fa fa-download"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
