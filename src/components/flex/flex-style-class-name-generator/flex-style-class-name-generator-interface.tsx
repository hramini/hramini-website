import { IFlexProperties } from '../../flex/flex-interface';
import { GridScreenSize } from '../../grid/grid-enum';

export interface IFlexStyleClassNameGeneratorEntry {
  readonly flexProperties: IFlexProperties;
}

export interface IFlexStyleClassNameGeneratorGetFlexClassName {
  readonly flexClassName: string;
}

export interface IFlexViewGenerateFlexSizeStyleSheetClassParam {
  readonly flexScreenSize: GridScreenSize;
  readonly flexSize: number;
  readonly flexOrder?: number;
}
