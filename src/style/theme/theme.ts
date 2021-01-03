import { createMuiTheme } from '@material-ui/core/styles';
import createBreakepoints from '@material-ui/core/styles/createBreakpoints';
import '../../index.css';

const font = "'Ubuntu', sans-serif";

const breakpoints = createBreakepoints({});

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
    [breakpoints.up('md')]: {
      fontSize: 6,
    },
    [breakpoints.up('sm')]: {
      fontSize: 4,
    },
  },
});

export default theme;
