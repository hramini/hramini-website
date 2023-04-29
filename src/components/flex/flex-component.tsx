import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { IFlexProperties } from './flex-interface';
import { FlexStyleClassNameGenerator } from './flex-style-class-name-generator/flex-style-class-name-generator-class';
import './flex.sass';

export default class Flex extends BaseComponent<IFlexProperties> {
  public render(): ReactElement {
    const { children, className } = this.props;
    const flexStyleClassNameGenerator: FlexStyleClassNameGenerator =
      new FlexStyleClassNameGenerator({
        flexProperties: this.props,
      });
    let { flexClassName } = flexStyleClassNameGenerator.getFlexClassName();

    flexClassName = this.setMultipleClassName([flexClassName, className]);

    return <div className={flexClassName}>{children}</div>;
  }
}
