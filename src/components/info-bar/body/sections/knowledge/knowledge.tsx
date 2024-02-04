import React, { ReactElement } from 'react';
import BaseComponent from '../../../../../base/base-component';
import './knowledge.sass';

export class Knowledge extends BaseComponent {
  public render(): ReactElement {
    return (
      <ul className="c-knowledge">
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> Linux (Ubuntu)
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> SOLID Principles
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> Redux, GatsbyJS
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> ExpressJs, PassportJs
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> MongoDb, Mongoose
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> Stylus, SASS, SCSS
        </li>
        <li className="c-knowledge__item">
          <i className="fa fa-check"></i> GIT Version Control
        </li>
      </ul>
    );
  }
}
