import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { CreateNewOrderModal } from "./components/CreateNewOrder";
import { AllProductsProvider } from "./contexts/AllProductsContext";
import { CreateNewOrderProvider } from "./contexts/CreateNewOrderModal";
import { GlobalStyle } from "./styles/globals";

ReactDOM.render(
  <React.StrictMode>
    <AllProductsProvider>
      <CreateNewOrderProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
        <CreateNewOrderModal />
      </CreateNewOrderProvider>
    </AllProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
