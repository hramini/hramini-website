import React, { ReactElement } from 'react';
import BaseComponent from '../../../../../base/base-component';
import { CircularProgress } from '../../../../progress/circular/circular-progress';
import './languages.sass';

export class Languages extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-languages">
        <div className="c-languages__progress">
          <CircularProgress percent={100} label="Persian" />
        </div>
        <div className="c-languages__progress">
          <CircularProgress percent={70} label="English" />
        </div>
      </div>
    );
  }
}
