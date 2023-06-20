import '@mui/material/CircularProgress';

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    accent: true;
    white: true;
  }
}
