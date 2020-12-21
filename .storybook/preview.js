import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/style/theme/theme';
import GlobalStyle from '../src/style/global/global';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
