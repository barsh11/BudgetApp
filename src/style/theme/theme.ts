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
  },
  typography: {
    fontFamily: font,
  },
});

export default theme;
