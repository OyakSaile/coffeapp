import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globals";
import { AllProductsProvider } from "./contexts/AllProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <AllProductsProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AllProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
