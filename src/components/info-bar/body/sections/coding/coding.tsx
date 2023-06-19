import React, { ReactElement, ReactNode } from 'react';
import BaseComponent from '../../../../../base/base-component';
import { codingData } from './coding-data';
import './coding.sass';
import { CodingItem } from './item/coding-item';
import { ICodingItemProperties } from './item/coding-item-interface';

export class Coding extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-coding">
        {codingData.map(
          (item: ICodingItemProperties, index: number): ReactNode => {
            return <CodingItem key={index} {...item} />;
          }
        )}
      </div>
    );
  }
}
