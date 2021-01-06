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
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
  },
});

export default theme;
