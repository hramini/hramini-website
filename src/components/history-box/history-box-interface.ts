import { ReactElement } from 'react';
import { IBaseProperties } from '../../base/base-interface';

export interface IHistoryBoxProperties extends IBaseProperties {
  title: string;
  subtitle: string;
  duration: string;
  url?: string;
  details?: (string | ReactElement)[];
}
