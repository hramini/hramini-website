import { IBaseProperties } from '../../base/base-interface';
import { GridLayoutType } from './grid-enum';

export interface IGridProperties extends IBaseProperties {
  readonly layout: GridLayoutType;
  readonly className?: string;
  readonly wrap?: boolean;
  readonly layoutDesktop?: GridLayoutType;
  readonly layoutTablet?: GridLayoutType;
  readonly layoutMobile?: GridLayoutType;
}
