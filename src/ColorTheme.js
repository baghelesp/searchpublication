import { createTheme } from '@mui/material/styles';

export const ColorTheme = createTheme({
  palette: {
    primary: {
      main: '#008000',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#42BCFB',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
    tertiary: {
        main: '#E9F1FF',
        // light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        // contrastText: '#47008F',
      },
    dark:{
        main:'#0E0E2C',
    },
    success:{
        main:'#008000'
    },
    white:{
      main:'#FFFFFF'
    }
  },
});