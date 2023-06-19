import React, { ReactNode } from 'react';
import BaseComponent from '../../../../../../base/base-component';
import { LinearProgress } from '../../../../../progress/linear/linear-progress';
import { ICodingItemProperties } from './coding-item-interface';

export class CodingItem extends BaseComponent<ICodingItemProperties> {
  public render(): ReactNode {
    const { label, percent } = this.props;

    return (
      <div className="c-coding__progress">
        <LinearProgress percent={percent} label={label} />
      </div>
    );
  }
}
