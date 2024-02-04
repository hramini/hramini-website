import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { IGridProperties } from './grid-interface';
import { GridStyleClassNameGenerator } from './grid-style-class-name-generator/grid-style-class-name-generator-class';
import './grid.sass';

export default class Grid extends BaseComponent<IGridProperties> {
  public render(): ReactElement {
    const { children, className } = this.props;
    const gridStyleClassNameGenerator: GridStyleClassNameGenerator =
      new GridStyleClassNameGenerator({
        gridProperties: this.props,
      });
    let { gridClassName } = gridStyleClassNameGenerator.getGridClassName();

    gridClassName = this.setMultipleClassName([gridClassName, className]);

    return <section className={gridClassName}>{children}</section>;
  }
}
