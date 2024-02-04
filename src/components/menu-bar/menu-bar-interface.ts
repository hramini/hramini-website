import { Theme } from '../layout/layout-enum';

export interface IMenuBarProperties {
  onMenuIconClicked(open: boolean): void;
  onSwitchThemeChange(checked: boolean): void;
  theme: Theme;
}

export interface IMenuBarState {
  open?: boolean;
  routeName?: string;
}
