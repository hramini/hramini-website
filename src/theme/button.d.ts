import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
    white: true;
  }

  interface ButtonClasses {
    containedAccent: string;
    outlinedAccent: string;
  }
}
