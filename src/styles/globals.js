import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

// global css
const GlobalStyle = createGlobalStyle`

  ${reset}
  ${fonts}
  
  html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }
  
  #__next {
    position:relative;
  }

  *,
  :before,
  :after {
    box-sizing: border-box !important;
  }

  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  .ReactModal__Overlay {
    opacity: 0;
    z-index:1001 !important;
    transition: opacity 0.5s ease-in-out;
  }
  
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }

`;

export default GlobalStyle;
