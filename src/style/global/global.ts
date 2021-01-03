import { createGlobalStyle, css } from 'styled-components';

// /*$bp-largest: 75em; //1200px
// $bp-large: 68.75em; //1100px
// $bp-medium: 56.25em; //900px
// $bp-small:  37.5em; //600px
// $bp-smallest: 31.25em; //500px*/

export const bodyStyles = css``;

export const htmlStyles = css`
  box-sizing: border-box;
`;

export const generalStyles = css`
  margin: 0;
  padding: 0;
  box-sizing: inherit;

  --color-primary: #3a2d96;
  --color-primary-light: #473a9d;

  --color-secondary: #ff7b7d;

  --color-tertiary: #fcead3;
  --color-tertiary-light: #fdf1e4;

  --color-forthtiary: #199fe6;

  --color-grey-dark: #3f3f46;
  --color-grey-light: #988d8b;

  --color-black: #000000;
  --color-white: #ffffff;
  --color-white-dark: #faf9fe;

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);
`;

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        ${generalStyles}
    }    

    html{
        ${htmlStyles}
    }

    body {
        ${bodyStyles}
    }
`;

export default GlobalStyle;
