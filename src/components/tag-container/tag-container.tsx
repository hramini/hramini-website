import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { ITagContainerProps } from './tag-container-interface';
import './tag-container.sass';

export default class TagContainer extends BaseComponent<ITagContainerProps> {
  public render(): ReactElement {
    const { text } = this.props;

    return (
      <>
        <span className="tag-container">{'<'}</span>
        {text} <span className="tag-container">{'/>'}</span>
      </>
    );
  }
}
