import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
html{
  @media only screen and (max-width: 570px) {
    font-size: 15px;
  }
}

body{
  min-height: 100vh;
  color:${({ theme }) => theme.fontColors.mainText};
  background-image:${({ theme }) =>
    `linear-gradient(45deg,${theme.colors.primary},${theme.colors.secondary})`};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x:hidden;
}

iframe{
  border:none;
}
`;

export default GlobalStyle;
