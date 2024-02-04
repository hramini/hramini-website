import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import { IShareContainerProperties } from './share-container-interface';

export default class ShareContainer extends BaseComponent<IShareContainerProperties> {
  public render(): ReactNode {
    const { children, shareName, ...restProperties } = this.props;

    return (
      <div
        data-id="share"
        data-name={shareName}
        {...restProperties}
        style={{
          pointerEvents: 'none',
        }}
      >
        {children}
      </div>
    );
  }
}
