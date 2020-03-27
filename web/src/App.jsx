import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
