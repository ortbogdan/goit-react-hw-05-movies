import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: rgb(170, 194, 224);
  background-color: rgb(20, 27, 37);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height:100%;
}
h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    font-family: 'Josefin Sans', sans-serif;
    
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
}
ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
p {
  margin: 0;
}
`;
