import { ReactNode } from 'react';
import { Theme } from './layout-enum';

export interface ILayoutProperties {
  readonly title: string;
  readonly description: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
}

export interface ILayoutState {
  menuOpened?: boolean;
  theme: Theme;
}
