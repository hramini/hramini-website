import { GridLayoutType, GridScreenSize } from '../grid-enum';
import { IGridProperties } from '../grid-interface';

export interface IGridStyleClassNameGeneratorEntry {
  readonly gridProperties: IGridProperties;
}

export interface IGridStyleClassNameGeneratorGetGridClassName {
  readonly gridClassName: string;
}

export interface IGridViewGenerateResponsiveGridStyleSheetClassParam {
  readonly gridLayout: GridLayoutType;
  readonly gridSize: GridScreenSize;
}
