import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme/theme';
import GlobalStyle from './style/global/global';
import App from './App';

const app = <App />;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{app}</ThemeProvider>
  </>,
  document.getElementById('root')
);
