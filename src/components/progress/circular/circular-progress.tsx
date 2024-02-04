import { Circle } from 'rc-progress';
import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import { ICircularProgressProperties } from './circular-progress-interface';
import './circular-progress.sass';

export class CircularProgress extends BaseComponent<ICircularProgressProperties> {
  public render(): ReactElement {
    const {
      label,
      showPercent = true,
      trailWidth = 7,
      trailColor = '#191923',
      // strokeColor = '#ffc107',
      strokeWidth = 7,
      ...restProperties
    } = this.props;

    return (
      <div className="c-circular-progress">
        <div className="c-circular-progress__progress">
          {showPercent ? (
            <p className="c-circular-progress__percent">
              {restProperties.percent}%
            </p>
          ) : (
            <></>
          )}
          <Circle
            trailWidth={trailWidth}
            // strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            {...restProperties}
          />
        </div>
        <p className="c-circular-progress__label">{label}</p>
      </div>
    );
  }
}
