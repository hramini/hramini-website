import { PaletteMode, ThemeProvider } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { getTheme } from '../options/theme';
import { ThemeContext } from './theme-context';

export default function ThemeLoader({ children }: any) {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
      mode,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
