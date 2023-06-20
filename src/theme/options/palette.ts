import { createTheme, PaletteMode, Theme } from '@mui/material';
import {
  fontSizeCalc,
  sizeCalc,
} from '../../global/size-calculator/size-calculator';

export function paletteThemeOption(mode: PaletteMode = 'dark'): Theme {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              dark: '#00125F',
              main: '#2F378D',
              light: '#6361BE',
            },
            secondary: {
              dark: '#B14600',
              main: '#EA7411',
              light: '#FFA447',
            },
            // getContrastText(background) {
            //   if (background === '#C78700') {
            //     return '#FFFFFF';
            //   }

            //   return '#444444';
            // },
            success: {
              main: '#12714F',
              light: '#E0FFED',
              dark: '#2E8B16',
            },
            error: {
              main: '#CE4F4F',
              light: '#FFE6E6',
              dark: '#961616',
            },
            warning: {
              main: '#796E0A',
              light: '#FFF7B0',
              dark: '#FDBB00',
            },
            accent: {
              main: '#6F6F6F',
              light: '#CECECE',
              dark: '#444444',
            },
            context: {
              main: '#6F6F6F',
              light: '#FFFFFF',
              dark: '#444444',
            },
            background: {
              default: '#FFFFFF',
              paper: '#FFFFFF',
            },
            form: {
              placeholder: '#9e9e9e',
              disabledText: '#6f6f6f',
              disabled: '#f5f5f5',
            },
            white: {
              main: '#fff',
              dark: '',
              light: '',
            },
          }
        : // DARK THEME //
          {
            primary: {
              dark: '#040711',
              main: '#0A142F',
              light: '#122454',
              contrastText: '#023047',
            },
            secondary: {
              dark: '#9B681C',
              main: '#B77B21',
              light: '#D99530',
              contrastText: '#FFFFFF',
            },
            accent: {
              main: '#33CCF2',
              light: '#66D8F5',
              dark: '#19C5F0',
              contrastText: '#FFFFFF',
            },
            success: {
              main: '#12714F',
              light: '#E0FFED',
              dark: '#2E8B16',
            },
            error: {
              main: '#CE4F4F',
              light: '#FFE6E6',
              dark: '#961616',
            },
            warning: {
              main: '#796E0A',
              light: '#FFF7B0',
              dark: '#FDBB00',
            },
            context: {
              main: '#6F6F6F',
              light: '#FFFFFF',
              dark: '#444444',
            },
            background: {
              default: '#040C21',
              paper: '#365973',
            },
            form: {
              placeholder: '#9e9e9e',
              disabledText: '#6f6f6f',
              disabled: '#f5f5f5',
            },
            white: {
              main: '#fff',
              dark: '',
              light: '',
            },
          }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        // xxl: 1536,
      },
    },
    spacing: (val: number) => {
      switch (val) {
        case 0:
          return 0;
        case 1:
          return 2;
        case 2:
          return 4;
        case 8:
          return 32;
        case 9:
          return 40;
        case 10:
          return 48;
        case 11:
          return 80;
        case 12:
          return 96;
        case 13:
          return 152;
        default:
          if (val >= 3 && val <= 7) {
            return 8 + (val - 3) * 4;
          }
          return val * 2;
      }
    },
    typography: {
      fontFamily: 'main',
      h1: {
        fontSize: fontSizeCalc(48),
        lineHeight: sizeCalc(54, 48),
        fontWeight: 600,
      },
      h2: {
        fontSize: fontSizeCalc(32),
        lineHeight: sizeCalc(48, 32),
        fontWeight: 500,
      },
      h3: {
        fontSize: fontSizeCalc(21),
        lineHeight: sizeCalc(32, 21),
        fontWeight: 500,
      },
      h4: {
        fontSize: fontSizeCalc(15),
        lineHeight: sizeCalc(24, 15),
        fontWeight: 400,
      },
      h5: {
        fontSize: fontSizeCalc(13),
        lineHeight: sizeCalc(20, 13),
        fontWeight: 400,
      },
      caption: {
        fontSize: fontSizeCalc(13),
        lineHeight: sizeCalc(20, 13),
        fontWeight: 400,
      },
    },
  });
}
