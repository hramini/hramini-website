import { Line } from 'rc-progress';
import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import { ILinearProgressProperties } from './linear-progress-interface';
import './linear-progress.sass';

export class LinearProgress extends BaseComponent<ILinearProgressProperties> {
  public render(): ReactElement {
    const {
      label,
      showPercent = true,
      trailWidth = 3,
      strokeWidth = 3,
      strokeColor = '#ffc107',
      ...restProperties
    } = this.props;

    return (
      <div className="c-linear-progress">
        <div className="c-linear-progress__label">
          <p className="c-linear-progress__label-text">{label}</p>
          <p className="c-linear-progress__label-text">
            {restProperties.percent}%
          </p>
        </div>
        <Line
          trailWidth={trailWidth}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          {...restProperties}
        />
      </div>
    );
  }
}
