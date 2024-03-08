import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#006B3C',
    },
    secondary: {
      main: '#93B487',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 17.5,
      fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
