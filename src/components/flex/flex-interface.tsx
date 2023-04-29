import { IBaseProperties } from '../../base/base-interface';

export interface IFlexProperties extends IBaseProperties {
  readonly size: number;
  readonly tabletSize?: number;
  readonly mobileSize?: number;
  readonly desktopOrder?: number;
  readonly tabletOrder?: number;
  readonly mobileOrder?: number;
  readonly className?: string;
}
