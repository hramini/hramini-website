import '@mui/material/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    // secondary: true;
    // neutral: true;
    // purple: true;
  }

  interface ChipClasses {
    colorSuccess: string;
    colorError: string;
    colorSecondary: string;
  }
}
