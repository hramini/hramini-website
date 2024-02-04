import React, { ReactElement } from 'react';
import BaseComponent from '../../../../../base/base-component';
import './living.sass';

export class Living extends BaseComponent {
  public render(): ReactElement {
    return (
      <ul className="c-living">
        <li>
          <h6>Residence:</h6>
          <span>Iran</span>
        </li>
        <li>
          <h6>City:</h6>
          <span>Shiraz</span>
        </li>
        <li>
          <h6>Year of birth:</h6>
          <span>1993</span>
        </li>
      </ul>
    );
  }
}
