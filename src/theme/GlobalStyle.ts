import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Lexend', 'sans-serif';
  }

  body, html {
    height: 100%;
    width: 100%;
    font-family: 'Lexend', 'sans-serif';
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
    /* overflow-y: scroll; */
  }

  body {
    margin: 0;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    color: black;
  }

`;

export default GlobalStyle;
