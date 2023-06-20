import { PaletteMode } from '@mui/material';

export interface IThemeContext {
  toggleColorMode(): void;
  mode: PaletteMode;
}
