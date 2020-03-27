import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    color: #333;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }
  
  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
  }

`;
