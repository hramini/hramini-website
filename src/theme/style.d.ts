import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    white: Palette['primary'];
    context: Palette['primary'];
    form: any;
  }
  interface PaletteOptions {
    accent: Partial<PaletteColor>;
    context: Partial<PaletteColor>;
    form: Partial<FormPaletteColor>;
    white: Partial<FormPaletteColor>;
  }
  interface PaletteColor {
    main: string;
    light: string;
    dark: string;
  }

  interface FormPaletteColor extends PaletteColor {
    placeholder: string;
    disabled: string;
    disabledText: string;
  }

  // interface BreakpointOverrides {
  //   xxl: true;
  // }
}
