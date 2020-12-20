import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/global/global';
import App from './App';

const app = <App />;

ReactDOM.render(
  <>
    <GlobalStyle />
    {app}
  </>,
  document.getElementById('root'),
);
