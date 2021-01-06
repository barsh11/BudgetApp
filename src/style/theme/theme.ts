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
      primary: 'white',
      secondary: 'black',
    },
    grey: {
      A100: '#988d8b',
      A200: '#3f3f46',
    },
  },
  typography: {
    fontFamily: font,
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
