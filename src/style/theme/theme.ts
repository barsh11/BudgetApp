import { createMuiTheme } from '@material-ui/core/styles';
import '../../index.css';

const font = "'Ubuntu', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3a2d96',
    },
    secondary: {
      main: '#ff7b7d',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
    grey: {
      A100: '#988d8b',
      A200: '#3f3f46',
    },
  },
  typography: {
    fontFamily: font,
    h3: {
      fontSize: '2.2rem',
      '@media only screen and (max-width: 75em)': {
        fontSize: '2rem',
      },
      '@media only screen and (max-width: 56.25em)': {
        fontSize: '1.8rem',
      },
      '@media only screen and (max-width: 22em)': {
        fontSize: '1.5rem',
      },
    },
    h4: { fontSize: '2rem' },
    h6: {
      '@media only screen and (max-width: 22em)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      '@media only screen and (max-width: 22em)': {
        fontSize: '0.8rem',
      },
    },
  },
});

export default theme;
