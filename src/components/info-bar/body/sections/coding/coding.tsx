import React, { ReactElement } from 'react';
import BaseComponent from '../../../../../base/base-component';
import { LinearProgress } from '../../../../progress/linear/linear-progress';
import './coding.sass';

export class Coding extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-coding">
        <div className="c-coding__progress">
          <LinearProgress percent={80} label="React" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={50} label="React Native" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={70} label="NodeJs" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={90} label="Javascript" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={90} label="Typescript" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={80} label="C#, ASP.NET" />
        </div>
        <div className="c-coding__progress">
          <LinearProgress percent={90} label="HTML, CSS" />
        </div>
      </div>
    );
  }
}
