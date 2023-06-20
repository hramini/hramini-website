import { Context, createContext } from 'react';
import { IThemeContext } from './theme-context-type';

export const ThemeContext: Context<IThemeContext> =
  createContext<IThemeContext>({
    toggleColorMode: () => {},
    mode: 'light',
  });
