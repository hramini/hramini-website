import { GridScreenSize } from '../grid-enum';
import {
  IGridStyleClassNameGeneratorEntry,
  IGridStyleClassNameGeneratorGetGridClassName,
  IGridViewGenerateResponsiveGridStyleSheetClassParam,
} from './grid-style-class-name-generator-interface';

export class GridStyleClassNameGenerator {
  private gridClassName: string[];

  public constructor(
    private readonly entry: IGridStyleClassNameGeneratorEntry
  ) {
    this.generate();
  }

  public getGridClassName(): IGridStyleClassNameGeneratorGetGridClassName {
    const { gridClassName } = this;

    return { gridClassName: gridClassName.join(' ') };
  }

  private generate(): void {
    const { gridProperties } = this.entry;
    const { wrap = false, layout } = gridProperties;
    const {
      layoutDesktop = layout,
      layoutTablet = layout,
      layoutMobile = layout,
    } = gridProperties;

    this.gridClassName = ['grid', wrap ? 'wrap' : ''];

    this.generateResponsiveGridStyleSheetClass({
      gridLayout: layoutDesktop,
      gridSize: GridScreenSize.DESKTOP,
    });

    this.generateResponsiveGridStyleSheetClass({
      gridLayout: layoutTablet,
      gridSize: GridScreenSize.TABLET,
    });

    this.generateResponsiveGridStyleSheetClass({
      gridLayout: layoutMobile,
      gridSize: GridScreenSize.MOBILE,
    });
  }

  private generateResponsiveGridStyleSheetClass(
    param: IGridViewGenerateResponsiveGridStyleSheetClassParam
  ): void {
    const { gridLayout, gridSize } = param;

    this.gridClassName = [...this.gridClassName, `${gridLayout}-${gridSize}`];
  }
}
