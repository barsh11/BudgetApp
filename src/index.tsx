import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import theme from './style/theme/theme';
import GlobalStyle from './style/global/global';
import App from './App';
import ErrorBoundary from './hoc/ErrorBoundary';

const app = <App />;

ReactDOM.render(
  <>
    <ErrorBoundary>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{app}</ThemeProvider>
    </ErrorBoundary>
  </>,
  document.getElementById('root')
);
