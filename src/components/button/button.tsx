import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { IButtonProperties } from './button-interface';
import './button.sass';

export class Button extends BaseComponent<IButtonProperties> {
  public render(): ReactElement {
    const { className, ...restProperties } = this.props;
    const buttonClassName = this.setMultipleClassName(['button', className]);

    return <button {...restProperties} className={buttonClassName}></button>;
  }
}
